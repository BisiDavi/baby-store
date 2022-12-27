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

type cartProductType = productType & { quantity: number };

export type cartType = {
  amount: number;
  items: Array<cartProductType>;
  userEmail: string;
  quantity: 0;
};
