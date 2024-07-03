import axios from 'axios';

export const getGoogleUrl = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-url`
  );
  const data = res.data;
  const url = data.url;
  return url;
};
