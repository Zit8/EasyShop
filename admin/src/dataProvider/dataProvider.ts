/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { DataProvider } from "react-admin";
import type { CategoryType, ProductType } from "../types";
import type { ShopType } from "../types/ShopType";
import type { SubCategoryType } from "../types/SubCategoryType";
import type { UserType } from "../types/UserType";

type IdType = {
  id: number;
};

type UpdateType = {
  ids: [number];
  data: CategoryType | ProductType;
};

const getListSubCategories: () => Promise<SubCategoryType[]> = async () => {
  const { data }: AxiosResponse<SubCategoryType[]> = await axios(
    "http://localhost:3001/api/subcategories"
  );
  return data;
};
const getListShops: () => Promise<ShopType[]> = async () => {
  const { data }: AxiosResponse<ShopType[]> = await axios(
    "http://localhost:3001/shop"
  );
  return data;
};
const getListUsers: () => Promise<UserType[]> = async () => {
  const { data }: AxiosResponse<UserType[]> = await axios(
    "http://localhost:3001/api/users"
  );
  return data;
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
const updateManyProducts: (data: UpdateType) => Promise<[number]> = async (
  data
) => {
  try {
    const res = await axios.put(`http://localhost:3001/api/products/many`, {
      data,
    });
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
      case "subcategories":
        return getListSubCategories();
      case "shops":
        return getListShops();
      case "users":
        return getListUsers();
      case "products":
        return getListProducts();
      case "categories":
        return getListCategories();
        break;
      default:
        break;
    }
  },
  getOne: async (resource: string, id: IdType) => {
    switch (resource) {
      case "products":
        return getOneProduct(id);
        break;
      case "categories":
        return getOneCategory(id);
        break;
      default:
        break;
    }
  },
  create: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        return createOneProduct(params.data);
      case "categories":
        return createOneCategory(params.data);
      default:
        break;
    }
  },
  update: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        return updateOneProduct(params.data);
      case "categories":
        return updateOneCategory(params.data);
      default:
        break;
    }
  },
  updateMany: async (resource: string, params: any) => {
    switch (resource) {
      case "products":
        return updateManyProducts(params.data);
      case "categories":
        return updateManyCategories(params.data);
      default:
        break;
    }
  },
} as any;

export default dataApiProvider;
