import { Brands, Category, ListParams, ListResponse } from 'models';
import axiosClient from './axiosClient';

const categoryApi = {
  getAll(): Promise<ListResponse<any>> {
    const url = '/category';
    return axiosClient.get(url);
  },
  getCategoryNoBrand(): Promise<ListResponse<Brands>> {
    const url = '/category/nobrand';
    return axiosClient.get(url);
  },
  getAllCategory(params: ListParams): Promise<ListResponse<Category>> {
    const url = '/category';
    return axiosClient.get(url, { params });
  },
  remove(user_id: string): Promise<any> {
    const url = `/category/${user_id}`;
    return axiosClient.delete(url);
  },
  removeBrands(user_id: string): Promise<any> {
    const url = `/brand/${user_id}`;
    return axiosClient.delete(url);
  },
  update(data: Partial<Category>): Promise<Category> {
    const url = `/category/${data.id}`;
    return axiosClient.patch(url, data);
  },
  updateBrand(data: Partial<Brands>): Promise<Brands> {
    const url = `/brand/${data.id}`;
    return axiosClient.patch(url, data);
  },
  add(data: Category): Promise<Category> {
    const url = '/category';
    return axiosClient.post(url, data);
  },
  addBrand(data: Brands): Promise<Brands> {
    const url = '/brand';
    return axiosClient.post(url, data);
  },
  getById(user_id: string): Promise<Category> {
    const url = `/category/${user_id}`;
    return axiosClient.get(url);
  },
  getByIdBrand(user_id: string): Promise<Brands> {
    const url = `/brand/${user_id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;