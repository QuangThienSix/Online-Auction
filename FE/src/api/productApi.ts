import { ListParams, ListResponse } from 'models';
import { Product } from 'models/product';
import axiosClient from './axiosClient';

const productApi = {
    getAll(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/top5-ratting';
        return axiosClient.get(url);
    },
    getAllBySeller(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/seller';
        return axiosClient.get(url);
    },
    getAllPrice(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/top5-price';
        return axiosClient.get(url);
    },
    getDetail(id: string): Promise<any> {
        const url = `/product/productdetail/${id}`;
        return axiosClient.get(url);
    },
    getCategoryID(id: string): Promise<ListResponse<Product>> {
        const url = `/product/getProductByCategoryId/${id}`;
        return axiosClient.get(url);
    },
    getBrandID(id: string): Promise<ListResponse<Product>> {
        const url = `/product/getProductByBrandId/${id}`;
        return axiosClient.get(url);
    },
    auction(data: Partial<any>): Promise<any> {
        const url = `/product/auction`;
        return axiosClient.post(url, data);
    },
};

export default productApi;