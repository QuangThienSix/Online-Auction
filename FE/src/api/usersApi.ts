import { LoginPayload } from 'features/auth/authSlice';
import { urlLink } from 'helper/route';
import { ChangePass, ForgotPayload, ListParams, ListResponse, ListResponses, Users } from 'models';
import axiosClient from './axiosClient';
import { getItem } from 'utils';

const usersApi = {
  postLogin: (body: LoginPayload): Promise<ListResponses<Users>> => {
    return axiosClient.post(urlLink.auth.sign_in, body);
  },
  postsignup: (body: LoginPayload): Promise<ListResponses<Users>> => {
    return axiosClient.post(urlLink.auth.sign_up, body.currentUser);
  },
  postverify: (body: LoginPayload): Promise<ListResponses<Users>> => {
    return axiosClient.post(urlLink.auth.verify, body);
  },
  getAllUsers(params: ListParams): Promise<ListResponse<Users>> {
    const url = '/users';
    return axiosClient.get(url, { params });
  },
  remove(user_id: string): Promise<any> {
    const url = `/users/${user_id}`;
    return axiosClient.delete(url);
  },
  upseller(data: any): Promise<any> {
    const url = `/transform`;
    const { accessToken } = getItem('users');
    const body = {
      data: data,
      accessToken: accessToken
    }
    return axiosClient.put(url, body);
  },
  transformSeller(data: any): Promise<any> {
    const url = `/transform`;
    const { accessToken } = getItem('users');
    const body = {
      data: data,
      accessToken: accessToken
    }
    return axiosClient.post(url, body);
  },
  getById(user_id: string): Promise<Users> {
    const url = `/users/${user_id}`;
    return axiosClient.get(url);
  },
  add(data: Users): Promise<Users> {
    const url = '/users';
    return axiosClient.post(url, data);
  },

  update(data: Partial<Users>): Promise<Users> {
    const url = `/users/${data.user_id}`;
    return axiosClient.patch(url, data);
  },
  changePasss(data: Partial<ChangePass>): Promise<Users> {
    const url = `/users/changepassword`;
    return axiosClient.post(url, data);
  },
  forgotPass(data: Partial<ForgotPayload>): Promise<Users> {
    const url = `/auth/forgot`;
    return axiosClient.post(url, data);
  },
  sendOTP(data: Partial<any>): Promise<Users> {
    const url = `/auth/sendotp`;
    return axiosClient.post(url, data);
  },
  getPoint(user_id: string): Promise<any> {
    const url = `/users/point/${user_id}`;
    return axiosClient.get(url);
  },
 
};

export default usersApi;
