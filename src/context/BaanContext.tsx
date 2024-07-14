'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Spinner from '@/components/Spinner';
import { useAuth } from '@/context/AuthContext';
import {
  getCountByBaan,
  createBaanSelection,
  updateBaanSelection,
  getBaanSelectionByGroupId,
  deleteBaanSelection,
} from '@/utils/baan';
import { BaanCount } from '@/types/baan';
import { BaanSelection } from '@/types/BaanSelection';

interface IBaanContext {
  baanCounts: BaanCount[] | null;
  selectedBaan: BaanSelection[] | null;
  addBaanSelection: (baanId: string, order: number) => void;
  removeBaanSelection: (baanId: string) => void;
  isLoading: boolean;
}

const BaanContext = createContext<IBaanContext>({} as IBaanContext);

export const useBaan = () => useContext(BaanContext);

const BaanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, resetContext } = useAuth();
  const [baanCounts, setBaanCounts] = useState<BaanCount[] | null>(null);
  const [selectedBaan, setSelectedBaan] = useState<BaanSelection[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      const selected = await getBaanSelectionByGroupId(user.group_id);
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

  const addBaanSelection = async (baanId: string, order: number) => {
    if (!user) return;

    setIsLoading(true);
    try {
      if (selectedBaan) {
        const existingSelection = selectedBaan.find(
          (selection) => selection.baanId === baanId
        );
        if (existingSelection) {
          await updateBaanSelection(baanId, user.id, order);
        } else {
          await createBaanSelection(baanId, user.id, order);
        }
      } else {
        await createBaanSelection(baanId, user.id, order);
      }
      await fetchSelectedBaan();
      resetContext();
    } catch (error) {
      console.log('Error selecting baan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeBaanSelection = async (baanId: string) => {
    if (!user) return;

    setIsLoading(true);
    try {
      await deleteBaanSelection(baanId, user.group_id);
      await fetchSelectedBaan();
      resetContext();
    } catch (error) {
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
        isLoading,
      }}
    >
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-20">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </BaanContext.Provider>
  );
};

export default BaanProvider;
