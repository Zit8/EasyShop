/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { DataProvider } from "react-admin";
import type { CategoryType, ProductType } from "../types";

type IdType = {
  id: number;
};

type UpdateType = {
  ids: [number];
  data: CategoryType | ProductType;
};

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
const createOneProduct: (data: ProductType) => Promise<ProductType> = async (
  data
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/products", {
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const createOneCategory: (data: CategoryType) => Promise<CategoryType> = async (
  data
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/categories", {
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const updateOneProduct: (data: ProductType) => Promise<ProductType> = async (
  data
) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/products/${data.id}`,
      {
        data,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const updateOneCategory: (data: CategoryType) => Promise<CategoryType> = async (
  data
) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/categories/${data.id}`,
      {
        data,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const updateManyProducts: (data: UpdateType) => Promise<[number]> = async (data) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/products/many`,
      {
        data,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const updateManyCategories: (data: UpdateType) => Promise<[number]> = async (
  data
) => {
  try {
    const res = await axios.put(`http://localhost:3001/api/categories/many`, {
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
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
  create: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        createOneProduct(params.data);
        break;
      case "categories":
        createOneCategory(params.data);
        break;
      default:
        break;
    }
  },
  update: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        updateOneProduct(params.data);
        break;
      case "categories":
        updateOneCategory(params.data);
        break;
      default:
        break;
    }
  },
  updateMany: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        updateManyProducts(params.data);
        break;
      case "categories":
        updateManyCategories(params.data);
        break;
      default:
        break;
    }
  },
} as any;

export default dataApiProvider;
