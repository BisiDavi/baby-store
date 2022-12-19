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
    <div>
      <div className="top">
        {sold && <div className="sold-badge">Sold</div>}
        {product?.oldPrice && <div className="discount-badge">{discount}</div>}
      </div>
      <div className="image">
        <div className="image-view"></div>
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
