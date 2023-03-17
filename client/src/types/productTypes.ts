export type ProductType = {
  id?: number;
  orderCount: number;
  name: string;
  description: string;
  image?: string;
  number?: number;
  unit?: string;
  subcategoryId: number;
  delivered: boolean;
  shopId: number;
  userId: number;
  hidden: boolean;
  price?: number;
  SubCategory: SubCategoryType;
};

export type SubCategoryType = {
  map(arg0: (category: any) => JSX.Element): any;
  id: number;
  name: string;
  categoryId: number;
  userId: number;
  Category: CategoryType;
};
export type CategoryType = {
  id: number;
  name: string;
  userId: number;
};
