/* eslint-disable @next/next/no-img-element */
import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import { useState } from "react";

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
  const [hoverState, stateHoverState] = useState(false);
  function updateHover() {}
  const { sold, discount, price, rating, name, imgs } = product;
  return (
    <div
      className="rounded-lg relative p-2 product mr-4 h-96"
      onMouseMove={() => stateHoverState(true)}
      onMouseOut={() => stateHoverState(false)}
    >
      {hoverState && (
        <div className="icons flex flex-col absolute right-4 space-y-4">
          <Button
            className="bg-white shadow px-2 border rounded-md hover:bg-blue-900 hover:text-white"
            text="Wishlist"
          />
          <Button
            className="bg-white shadow px-2 border rounded-md hover:bg-blue-900 hover:text-white"
            text="See"
          />
        </div>
      )}
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
            <img src={imgItem} key={imgItem} alt={name} className="h-60" />
          ))}
        </div>
        <div className="image-control"></div>
      </div>
      {hoverState && (
        <div className="button-view w-full absolute top-40">
          <Button
            className="bg-white shadow px-5 py-2 transition duration-200 ease-in-out delay-100 rounded-md mx-auto flex my-2 hover:bg-blue-900 hover:text-white"
            text="Add to Cart"
          />
        </div>
      )}
      <h4 className="name font-medium text-center text-lg">{name}</h4>
      <div className="price-view flex mx-auto justify-center items-center">
        <h5 className="font-bold text-center text-md">${price}</h5>
        {product?.oldPrice && (
          <h6 className="text-sm mx-2 line-through">${product?.oldPrice}</h6>
        )}
      </div>
      <Ratings ratings={rating} />
    </div>
  );
}
