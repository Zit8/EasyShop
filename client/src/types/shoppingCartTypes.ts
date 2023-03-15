export type CartProductType = {
  id: number;
  count: number;
};

export type OrderType = {
  products: CartProductType[];
  userId: number;
  deliveryAddress: string;
  selfDelivery: boolean;
  deliveryData: string;
  deliveryTime: string;
};
