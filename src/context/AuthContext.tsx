'use client';

import { useGetUser } from '@/hooks/queries/user/useGetUser';
import { User } from '@/types/user';
import { redirect, usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  user?: User;
  handleOnSuccessLogin: (id: string) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [userId, setUserId] = useState('');
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data: user } = useGetUser({
    id: userId,
    isReady: !!isReady && !!userId,
  });

  useEffect(() => {
    if (pathname == '/') {
      return;
    }

    if (!user) {
      return redirect('/');
    }

    const isStaff = pathname.startsWith('/staff');
    if (isStaff && user?.role != 'staff') {
      return router.push('/');
    }
  }, [router]);

  const handleOnSuccessLogin = (userId: string) => {
    setIsReady(true);
    setUserId(userId);
  };

  return (
    <AuthContext.Provider value={{ user, handleOnSuccessLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
