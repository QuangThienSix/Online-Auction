import { ListResponse } from 'models';
import axiosClient from './axiosClient';

const bidderApi = {
  getAll(): Promise<ListResponse<any>> {
    const url = '/bidder/getProductBidding';
    return axiosClient.get(url);
  },

};

export default bidderApi;