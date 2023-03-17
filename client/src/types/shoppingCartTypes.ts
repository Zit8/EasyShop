import type { ProductType } from './productTypes';

export type OrderType = {
  products: ProductType[];
  userId: number;
  deliveryAddress: string;
  selfDelivery: boolean;
  deliveryData: string;
  deliveryTime: string;
};
