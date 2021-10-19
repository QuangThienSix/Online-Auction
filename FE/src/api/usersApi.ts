import { LoginPayload } from 'features/auth/authSlice';
import { urlLink } from 'helper/route';
import { ListResponses, Users } from 'models';
import axiosClient from './axiosClient';

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
};

export default usersApi;
