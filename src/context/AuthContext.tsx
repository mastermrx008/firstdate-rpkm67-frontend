'use client';

import Spinner from '@/components/firstdate/Spinner';
import { User } from '@/types/user';
import { getReceiveGiftCondition } from '@/utils/reward';
import { getCurrentTime } from '@/utils/time';
import { getUser, isUserRegistered } from '@/utils/user';

import { usePathname, useRouter } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IAuthContext {
  user: User | null;
  resetContext: () => Promise<void>;
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
  const router = useRouter();
  const [isReady, setisReady] = useState(false);

  const resetContext = useCallback(async () => {
    const userData = await getUser();
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    window.location.href = '/';
  }, []);

  useEffect(() => {
    const protectRoute = async () => {
      setisReady(false);

      // check if user is logged in
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        setisReady(true);
        return router.push('/');
      }

      const userObj: User = JSON.parse(userStr);
      setUser(userObj);

      const isStaff = userObj.role == 'staff';
      const isStaffPage = path.includes('/staff');
      const isRegistered = isUserRegistered(userObj);
      const isRegisterPage = path.includes('register');

      if (isStaff) {
        // staff route protection
        if (path == '/') {
          return router.push('firstdate/staff/home');
        }

        if (!isRegistered && !isRegisterPage) {
          return router.push('/staff/register');
        }

        if (!isStaffPage) {
          return router.push('/firstdate/staff/home');
        }
      } else {
        // user route protection
        if (path == '/') {
          return router.push('/home');
        }

        //check if user is registered
        if (!isRegistered && !isRegisterPage) {
          return router.push('/register');
        }

        // check if user is eligible to receive gift
        if (path.split('/').at(-1) == 'reward') {
          const condition = getReceiveGiftCondition(userObj);

          if (condition.status != 'ready') {
            return router.push('/firstdate/home');
          }
        }

        // check if it is staff page
        if (isStaffPage) {
          return router.push('/firstdate/home');
        }

        if (path !== 'home') {
          const firstdate = new Date(
            process.env.NEXT_PUBLIC_FIRST_DATE_DATE as string
          );
          const startRPKM = new Date(
            process.env.NEXT_PUBLIC_RUP_PEUN_DATE as string
          );
          const endBannSelect = new Date(
            process.env.NEXT_PUBLIC_CLOSED_BAAN_SELECTION_DATE as string
          );
          const freshyNight = new Date(
            process.env.NEXT_PUBLIC_FRESHY_NIGHT_DATE as string
          );
          const now = (await getCurrentTime()).currentTime;

          console.log(
            'now',
            now,
            'firstdate',
            firstdate,
            'startRPKM',
            startRPKM,
            'endBannSelect',
            endBannSelect,
            'freshyNight',
            freshyNight
          );
          //firstdate
          if (path.includes('firstdate')) {
            if (now < firstdate) {
              return router.push('/home');
            }
          }

          //RPKM
          if (path.includes('rpkm')) {
            if (now < startRPKM) {
              return router.push('/home');
            }

            // end baan select
            if (path.includes('rpkm/baan')) {
              if (now > endBannSelect) {
                return router.push('/rpkm/activities/home');
              }
            }

            // start freshy night
            if (path.includes('/freshy-night')) {
              console.log(now, freshyNight);
              if (now < freshyNight) {
                return router.push('/rpkm/activities/home');
              }
            }
          }
        }
      }

      setisReady(true);
    };
    protectRoute();
  }, [router, path]);

  return (
    <AuthContext.Provider value={{ user, resetContext, logout }}>
      {isReady ? (
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
