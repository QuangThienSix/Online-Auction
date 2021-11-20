import { ListResponse, Watch } from 'models';
import axiosClient from './axiosClient';

const watchApi = {
  getAll(): Promise<ListResponse<Watch>> {
    const url = '/watch-list';
    return axiosClient.get(url);
  },
  add(data: any): Promise<any> {
    const url = '/watch-list';
    return axiosClient.post(url, data);
  },

};

export default watchApi;