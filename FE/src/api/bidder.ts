import { ListResponse } from 'models';
import { bidderProduct } from 'models/bidderProduct';
import axiosClient from './axiosClient';

const bidderApi = {
  getAll(): Promise<ListResponse<bidderProduct>> {
    const url = '/bidder/getProductBidding';
    return axiosClient.get(url);
  },
  getWonList(): Promise<ListResponse<bidderProduct>> {
    const url = '/bidder/getWonList';
    return axiosClient.get(url);
  },

};

export default bidderApi;