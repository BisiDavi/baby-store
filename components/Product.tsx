/* eslint-disable @next/next/no-img-element */
import Ratings from "@/components/Ratings";

interface ProductItem {
  product: {
    sold?: boolean;
    discount?: string;
    price: number;
    oldPrice?: number;
    rating: number;
    name: string;
    imgs: string[];
  };
}

export default function Product({ product }: ProductItem) {
  const { sold, discount, price, rating, name, imgs } = product;
  return (
    <div className="rounded-lg bg-gray-100 p-2">
      <div className="top flex justify-between my-2">
        {product?.oldPrice && (
          <div className="discount-badge bg-white text-red-500 rounded-md w-12 flex items-center justify-center text-sm">
            {discount}
          </div>
        )}

        {sold && (
          <div className="sold-badge bg-purple-500 text-white rounded-md w-12 flex items-center justify-center text-sm">
            Sold
          </div>
        )}
      </div>
      <div className="image">
        <div className="image-view">
          {imgs.map((imgItem) => (
            <img src={imgItem} key={imgItem} alt={name} />
          ))}
        </div>
        <div className="image-control"></div>
      </div>
      <h4 className="name">{name}</h4>
      <div className="price-view">
        <h5>{price}</h5>
        {product?.oldPrice && <h6>{product?.oldPrice}</h6>}
      </div>
      <Ratings rating={rating} />
    </div>
  );
}
