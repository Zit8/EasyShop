import type { ProductType } from "./ProductType";

type OrderItemType = {
  id: number;
  shoppingCartId: number;
  productId: number;
  count: number;
  Product: ProductType;
};

export type OrderType = {
  id: number;
  userId: number;
  shopId: number;
  deliveryAddress: string;
  deliveryTime: string;
  deliveryDate: string;
  selfDelivery: boolean;
  paymentStatus: boolean;
  paymentWay: boolean;
  ShoppingCartItems: OrderItemType[];
};
