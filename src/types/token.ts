export type Token = {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};

export type Google = {
  userId: string;
  credential: Token;
};
