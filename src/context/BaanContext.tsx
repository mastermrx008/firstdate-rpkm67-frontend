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
  updateBaanSelection,
} from '@/utils/baan';
import { BaanCount } from '@/types/baan';
import { BaanSelection } from '@/types/BaanSelection';
import toast from 'react-hot-toast';
import { getGroupByUserId } from '@/utils/group';
import { usePathname, useRouter } from 'next/navigation';

interface IBaanContext {
  baanCounts: BaanCount[] | null;
  selectedBaan: BaanSelection[] | null;
  addBaanSelection: (baanId: string) => void;
  removeBaanSelection: (baanId: string) => void;
  removeAllBaanSelection: () => void;
  isLoading: boolean;
  order: number | null;
  setOrder: (order: number) => void;
  isLeader: boolean;
  isConfirmed: boolean;
  setIsConfirmed: (isConfirm: boolean) => void;
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
  const [order, setOrder] = useState<number | null>(null);
  const [isLeader, setIsLeader] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
      setSelectedBaan(selected.baanSelections);
    } catch (error) {
      console.log('Error fetching selected baan:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const addBaanSelection = async (baanId: string) => {
    if (!user) return;
    if (!order) return toast.error('กรุณาเลือกอันดับของบ้าน');

    setIsLoading(true);
    try {
      const existingSelection = selectedBaan?.find(
        (selection) => selection.order === order
      );

      if (existingSelection) {
        await updateBaanSelection(baanId, user.groupId, order);
        // toast.error('อันดับนี้ถูกเลือกไปเเล้ว');
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

  const checkGroupStatus = useCallback(async () => {
    if (user) {
      const myGroup = await getGroupByUserId(user.id);

      if (myGroup instanceof Error) {
        toast.error('ไม่สามารถเช็คสถานะของกลุ่มได้');
      } else if (myGroup) {
        const isLeader = myGroup.leaderId === user.id;
        setIsLeader(isLeader);
        setIsConfirmed(myGroup.isConfirmed);

        if (!isLeader && pathname == '/rpkm/baan/baan-select') {
          router.push('/rpkm/baan/home');
        }
      }
    }
  }, [user, getGroupByUserId, setIsLeader, setIsConfirmed, router]);

  useEffect(() => {
    if (selectedBaan) {
      const highestOrder = selectedBaan
        .sort((baan1, baan2) => baan1.order - baan2.order)
        .reduce((prev, baan) => (baan.order <= prev ? prev + 1 : prev), 1);

      setOrder(highestOrder);
    }
  }, [selectedBaan]);

  useEffect(() => {
    if (user) {
      checkGroupStatus();
      fetchBaanCounts();
      fetchSelectedBaan();
    }
  }, [user, fetchBaanCounts, fetchSelectedBaan, checkGroupStatus]);

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
        isLeader,
        isConfirmed,
        setIsConfirmed,
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
