export type ProductType = {
  id?: number;
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
  price: number;
};
