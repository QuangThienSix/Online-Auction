export interface Users {
  user_id?: string;
  username: string;
  password: string;
  fullname?: string;
  address?: string;
  email?: string;
  accessToken: string;
  tokenMail?: string;
  ratting?: number;
  refreshToken: string;
  islock: boolean;
  roles_id: number | string;
}
export interface ChangePass {
  oldpassword?: string;
  newpassword: string;
}

export interface ForgotPayload {
  email: string;
  newpassword: string;
  tokenMail: string;
}