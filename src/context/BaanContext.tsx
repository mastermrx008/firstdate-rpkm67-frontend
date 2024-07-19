'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Spinner from '@/components/firstdate/Spinner';
import { useAuth } from '@/context/AuthContext';
import {
  getCountByBaan,
  createBaanSelection,
  getBaanSelectionByGroupId,
  deleteBaanSelection,
} from '@/utils/baan';
import { BaanCount } from '@/types/baan';
import { BaanSelection } from '@/types/BaanSelection';
import toast from 'react-hot-toast';

interface IBaanContext {
  baanCounts: BaanCount[] | null;
  selectedBaan: BaanSelection[] | null;
  addBaanSelection: (baanId: string) => void;
  removeBaanSelection: (baanId: string) => void;
  removeAllBaanSelection: () => void;
  isLoading: boolean;
  order: number;
  setOrder: (order: number) => void;
}

const BaanContext = createContext<IBaanContext>({} as IBaanContext);

export const useBaan = () => useContext(BaanContext);

const BaanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [baanCounts, setBaanCounts] = useState<BaanCount[] | null>(null);
  const [selectedBaan, setSelectedBaan] = useState<BaanSelection[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [order, setOrder] = useState(1);

  const fetchBaanCounts = useCallback(async () => {
    setIsLoading(true);
    try {
      const counts = await getCountByBaan();
      if (counts instanceof Error) {
        throw counts;
      }
      setBaanCounts(counts);
    } catch (error) {
      console.log('Error fetching baan counts:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchSelectedBaan = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const selected = await getBaanSelectionByGroupId(user.groupId);
      if (selected instanceof Error) {
        throw selected;
      }
      console.log('selected', selected);
      setSelectedBaan(selected.baanSelections);
    } catch (error) {
      console.log('Error fetching selected baan:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const addBaanSelection = async (baanId: string) => {
    if (!user) return;

    setIsLoading(true);
    try {
      if (selectedBaan) {
        const existingSelection = selectedBaan.find(
          (selection) => selection.baanId === baanId
        );
        if (existingSelection) {
          toast.error('อันดับนี้ถูกเลือกไปเเล้ว');
        } else {
          await createBaanSelection(baanId, user.groupId, order);
        }
      } else {
        await createBaanSelection(baanId, user.groupId, order);
      }
      toast.success('เลือกบ้านสำเร็จ');
      await fetchSelectedBaan();
    } catch (error) {
      console.log('Error selecting baan:', error);
      toast.error('ไม่สามารถเลือกบ้านได้');
    } finally {
      setIsLoading(false);
    }
  };

  const removeBaanSelection = async (baanId: string) => {
    if (!user) return;

    setIsLoading(true);
    try {
      await deleteBaanSelection(baanId, user.groupId);
      await fetchSelectedBaan();
      toast.success('ลบบ้านสำเร็จ');
    } catch (error) {
      toast.error('ไม่สามารถลบบ้านได้');
      console.log('Error removing baan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeAllBaanSelection = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      if (selectedBaan) {
        await Promise.all(
          selectedBaan.map((selection) =>
            deleteBaanSelection(selection.baanId, user.groupId)
          )
        );
      }
      await fetchSelectedBaan();
      toast.success('ลบบ้านสำเร็จ');
    } catch (error) {
      toast.error('ไม่สามารลบบ้านได้');
      console.log('Error removing baan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBaanCounts();
      fetchSelectedBaan();
    }
  }, [user, fetchBaanCounts, fetchSelectedBaan]);

  return (
    <BaanContext.Provider
      value={{
        baanCounts,
        selectedBaan,
        addBaanSelection,
        removeBaanSelection,
        removeAllBaanSelection,
        isLoading,
        order,
        setOrder,
      }}
    >
      {isLoading && (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-20 z-[999]">
          <Spinner />
        </div>
      )}
      {children}
    </BaanContext.Provider>
  );
};

export default BaanProvider;
