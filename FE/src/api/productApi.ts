import { ListParams, ListResponse } from 'models';
import { Product } from 'models/product';
import axiosClient from './axiosClient';
import { getItem } from 'utils';

const productApi = {
    getAll(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/top5-ratting';
        return axiosClient.get(url);
    },
    updateProduct(data: Partial<Product>): Promise<Product> {
        const url = `/product/${data.id}`;
        return axiosClient.patch(url, data);
    },
    addProduct(data: Product): Promise<Product> {
        const url = '/product';
        const { accessToken } = getItem('users');
        const dataf = {
            data: data,
            accessToken: accessToken
        }
        return axiosClient.post(url, dataf);
    },
    remove(user_id: string): Promise<any> {
        const url = `/product/${user_id}`;
        return axiosClient.delete(url);
    },
    getAllBy(params: ListParams): Promise<ListResponse<Product>> {
        const url = '/product/all';
        return axiosClient.get(url, { params });

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
    getPrDetail(id: string): Promise<any> {
        const url = `/product/${id}`;
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