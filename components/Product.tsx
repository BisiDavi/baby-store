import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import Eye from "@/public/icon/Eye";
import Heart from "@/public/icon/Heart";
import toSlug from "@/utils/toSlug";
import Tag from "@/components/Tag";
import { productType } from "@/types";
import getCostPrice from "@/utils/getCostPrice";
import { formatPrice } from "@/utils/formatPrice";

interface ProductItem {
  product: productType;
}

export default function Product({ product }: ProductItem) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverEyeFillState, setHoverEyeFillState] = useState(false);
  const [hoverHeartFillState, setHeartFillHoverState] = useState(false);

  const fillEyeColor = hoverEyeFillState ? "white" : "black";
  const fillHeartColor = hoverHeartFillState ? "white" : "black";

  console.log("product", product);

  const { price, rating, title, images, brand, discountPercentage } = product;
  const productLink = toSlug(product.title);

  const discount = Math.round(product.discountPercentage);
  const fPrice = formatPrice(price);
  const costPrice = getCostPrice(price, discountPercentage);

  return (
    <>
      <div
        className="rounded-lg bg-white relative border  p-2 product mr-4 h-96"
        onMouseMove={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
      >
        {product?.discountPercentage && (
          <Tag
            className="bg-blue-900 flex top-4 absolute z-10"
            text={`${discount} %`}
          />
        )}
        {hoverState && (
          <div className="icons flex flex-col absolute right-2 z-10  space-y-2">
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
        <Link href={`/products/${productLink}?id=${product.id}`}>
          <div className="image">
            <div className="image-view">
              <Image
                src={images[0]}
                alt={title}
                className="h-52 mx-auto my-5"
                height={200}
                width={200}
              />
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
          <div className="text-content w-full">
            <h4 className="name font-medium text-center text-lg">{title}</h4>
            <h4 className="brand text-gray-500 font-medium text-center text-md">
              {brand}
            </h4>
            <div className="price-view flex mx-auto space-x-2 justify-center items-center">
              <h5 className="font-bold text-center text-lg">${fPrice}</h5>
              <h6 className="font-bold text-center line-through text-sm">
                ${costPrice}
              </h6>
            </div>
            {rating && <Ratings ratings={rating} />}
          </div>
        </Link>
      </div>
      <style global jsx>
        {`
          .product:hover .image-view img {
            transform: scale(1.06);
            transition: transform 0.5s ease-in-out;
          }
        `}
      </style>
    </>
  );
}
