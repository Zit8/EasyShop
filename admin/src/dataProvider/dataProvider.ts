/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { DataProvider } from "react-admin";
import type { CategoryType, ProductType } from "../types";

type IdType = {
  id: number;
}

const getListProducts: () => Promise<ProductType[]> = async () => {
  const { data }: AxiosResponse<ProductType[]> = await axios(
    "http://localhost:3001/api/products"
  );
  return data;
};

const getListCategories: () => Promise<CategoryType[]> = async () => {
  const { data }: AxiosResponse<CategoryType[]> = await axios(
    "http://localhost:3001/api/categories"
  );
  return data;
};

const getOneProduct: (id: IdType) => Promise<ProductType> = async (id) => {
  const { data }: AxiosResponse<ProductType> = await axios(
    `http://localhost:3001/api/products/${id}`
  );
  return data;
};
const getOneCategory: (id: IdType) => Promise<CategoryType> = async (id) => {
  const { data }: AxiosResponse<CategoryType> = await axios(
    `http://localhost:3001/api/categories/${id}`
  );
  return data;
};

const dataApiProvider: DataProvider = {
  getList: async (resource: string) => {
    switch (resource) {
      case "products":
        await getListProducts();
        break;
      case "categories":
        await getListCategories();
        break;
      default:
        break;
    }
  },
  getOne: async (resource: string, id: IdType) => {
    switch (resource) {
      case "products":
        await getOneProduct(id);
        break;
      case "categories":
        await getOneCategory(id);
        break;
      default:
        break;
    }
  },
} as any;

export default dataApiProvider;
