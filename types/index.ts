export type productType = {
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
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
  loading: {
    status: boolean;
    text: string;
  };
};
