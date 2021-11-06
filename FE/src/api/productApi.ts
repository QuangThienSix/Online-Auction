import { ListParams, ListResponse } from 'models';
import { Product } from 'models/product';
import axiosClient from './axiosClient';

const productApi = {
    getAll(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/top5-ratting';
        return axiosClient.get(url);
    },
    getDetail(id: string): Promise<any> {
        const url = `/product/productdetail/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;