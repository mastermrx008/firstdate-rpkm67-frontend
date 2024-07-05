import { createContext } from 'react';

export const CookieContext = createContext({
  startRefreshToken: (refresh_token: string, expires_in: number) => {},
});
