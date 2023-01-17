export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type cartProductType = {
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  thumbnail: string;
  images: string[];
};

export type cartType = {
  amount: number;
  items: Array<cartProductType>;
  userEmail: string;
  quantity: number;
};

export type UIType = {
  showSlideCart: boolean;
  previewProduct: {
    status: boolean;
    product: null | productType;
  };
  authModal: boolean;
};

export type inputType = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

export type checkoutType = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  deliveryAddress: string;
};

export type lineItemsType = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
};

export type currencyType = {
  currency: {
    name: string;
    value: string;
    code: "USD" | "NGN" | "CAD" | "EUR";
  };
};
