'use client';

import { getUser } from '@/api/user/getUser';
import Spinner from '@/components/Spinner';
import { User } from '@/types/user';
import { redirect, usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  user: User | null;
  resetContext: () => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
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
    if (!isReady.current) {
      return;
    }

    if (path == '/') {
      return;
    }

    if (!user) {
      return redirect('/');
    }

    const isStaffPage = path.startsWith('/staff');
    if (isStaffPage && user?.role != 'staff') {
      return router.push('/');
    }
  }, [router, user]);

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
