export interface Users {
  user_id?: number | string;
  username: string;
  password: string;
  fullname?: string;
  address?: string;
  email?: string;
  rfToken?: string;
  accessToken: string;
  refreshToken: string;
  islock: boolean;
  roles_id?: number | string;
}
