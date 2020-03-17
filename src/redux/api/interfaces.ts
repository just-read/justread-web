export interface ILogInParam {
  email: string;
  password: string;
}

export interface ISignUpParam {
  email: string;
  password: string;
  nickName: string;
}

export interface ILogInWithGoogleParam {
  email: string;
  nickName: string;
  googleId: string;
  tokenId: string;
}

export interface IRefreshTokenParam {
  refreshToken: string;
}

interface Response<T> {
  success: boolean;
  message: string | null;
  result: T;
}

interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

export type TAuthResponse = Response<AuthResult>;
