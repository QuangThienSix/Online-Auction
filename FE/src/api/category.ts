import { ListResponse } from 'models';
import axiosClient from './axiosClient';

const roleApi = {
  getAll(): Promise<ListResponse<any>> {
    const url = '/category';
    return axiosClient.get(url);
  },
};

export default roleApi;
