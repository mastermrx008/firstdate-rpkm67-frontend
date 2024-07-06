'use client';

import Spinner from '@/components/Spinner';
import { User } from '@/types/user';
import { getUser } from '@/utils/user';
import { usePathname, useRouter } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IAuthContext {
  user: User | null;
  resetContext: () => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const path = usePathname();
  const isReady = useRef(false);
  const router = useRouter();

  const resetContext = async () => {
    isReady.current = false;
    const userData = await getUser();
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    }
    isReady.current = true;
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {
    if (!isReady.current || path == '/') {
      return;
    }

    if (!user) {
      return router.push('/');
    }

    const isStaffPage = path.startsWith('/staff');
    if (isStaffPage && user?.role != 'staff') {
      return router.push('/');
    }
  }, [router, user, path]);

  useEffect(() => {
    isReady.current = false;
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const userObj: User = JSON.parse(userStr);
      setUser(userObj);
    }

    isReady.current = true;
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, resetContext, logout }}>
      {user || path == '/' ? (
        children
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-20">
          <Spinner />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
