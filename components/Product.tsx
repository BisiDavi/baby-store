/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";

import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import Eye from "@/public/icon/Eye";
import Heart from "@/public/icon/Heart";
import toSlug from "@/utils/toSlug";

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
  const [hoverState, setHoverState] = useState(false);
  const [hoverEyeFillState, setHoverEyeFillState] = useState(false);
  const [hoverHeartFillState, setHeartFillHoverState] = useState(false);

  const fillEyeColor = hoverEyeFillState ? "white" : "black";
  const fillHeartColor = hoverHeartFillState ? "white" : "black";

  const { discount, price, rating, name, imgs } = product;
  const productLink = toSlug(product.name);
  return (
    <Link href={`/products/${productLink}`}>
      <div
        className="rounded-lg relative p-2 product mr-4 h-96"
        onMouseMove={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
      >
        {hoverState && (
          <div className="icons flex flex-col absolute right-2  space-y-2">
            <Button
              className="bg-white shadow h-10 w-10 flex items-center justify-center  border rounded-md hover:bg-blue-900 hover:text-white"
              icon={<Heart fill={fillHeartColor} />}
              onMouseMove={() => setHeartFillHoverState(true)}
              onMouseOut={() => setHeartFillHoverState(false)}
            />
            <Button
              className="bg-white shadow px-2 h-10 w-10 hover:text-white flex justify-center items-center border rounded-md hover:bg-blue-900 hover:text-white"
              icon={<Eye fill={fillEyeColor} />}
              onMouseMove={() => setHoverEyeFillState(true)}
              onMouseOut={() => setHoverEyeFillState(false)}
            />
          </div>
        )}
        <div className="top flex justify-between my-2">
          {product?.oldPrice && (
            <div className="discount-badge bg-white text-red-500 rounded-md w-12 flex items-center justify-center text-sm">
              {discount}
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
      <style jsx>
        {`
          .product:hover .image-view img {
            transform: scale(1.06);
            transition: transform 0.5s ease-in-out;
          }
        `}
      </style>
    </Link>
  );
}
