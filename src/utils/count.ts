import { apiClient } from './axios';

export const createEbookCount = async (): Promise<boolean> => {
  try {
    await apiClient.post('/count/ebook', {});
    return true;
  } catch {
    return false;
  }
};
