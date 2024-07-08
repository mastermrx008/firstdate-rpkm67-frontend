import { Google, Token } from '@/types/token';
import { getExpireTime } from '@/utils/getExpireTime';

export type TokenDTO = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
};

export type GoogleDTO = {
  credential: TokenDTO;
  user_id: string;
};

export const convertTokenDTOToToken = (tokenDTO: TokenDTO): Token => {
  return {
    accessToken: tokenDTO.access_token,
    expiresIn: getExpireTime(tokenDTO.expires_in),
    refreshToken: tokenDTO.refresh_token,
  };
};

export const convertGoogleDTOToGoogle = (googleDTO: GoogleDTO): Google => {
  return {
    userId: googleDTO.user_id,
    credential: convertTokenDTOToToken(googleDTO.credential),
  };
};
