export type Token = {
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
};

export type Google = {
  userId: string;
  credential: Token;
};
