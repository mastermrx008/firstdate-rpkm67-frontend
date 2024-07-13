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
import { useAuth } from '@/context/AuthContext'; // Make sure to use the existing AuthContext
import { getBaan, createBaan, updateBaan } from '@/utils/baan';

interface IBaanContext {
  baan: string | null;
  setBaan: (baan: string) => void;
  isLoading: boolean;
}

const BaanContext = createContext<IBaanContext>({} as IBaanContext);

export const useBaan = () => useContext(BaanContext);

const BaanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, resetContext } = useAuth();
  const [baan, setBaan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBaan = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const fetchedBaan = await getBaan(user.id);
      if (fetchedBaan instanceof Error) {
        throw fetchedBaan;
      }
      setBaan(fetchedBaan);
    } catch (error) {
      console.log('Error fetching baan:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const handleSetBaan = async (newBaan: string) => {
    if (!user) return;

    setIsLoading(true);
    try {
      if (baan) {
        await updateBaan(user.id, newBaan);
      } else {
        await createBaan(user.id, newBaan);
      }
      setBaan(newBaan);
      resetContext();
    } catch (error) {
      console.log('Error setting baan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBaan();
  }, [fetchBaan]);

  return (
    <BaanContext.Provider value={{ baan, setBaan: handleSetBaan, isLoading }}>
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
