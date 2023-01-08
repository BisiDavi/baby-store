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
import useMediaQuery from "@/hooks/useMediaQuery";
import Price from "@/components/Price";
import useUI from "@/hooks/useUI";
import useCartMutation from "@/hooks/useCartMutation";
import useWishlistMutation from "@/hooks/useWishlistMutation";

interface ProductItem {
  product: productType;
  className?: string;
}

export default function Product({ product, className }: ProductItem) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverEyeFillState, setHoverEyeFillState] = useState(false);
  const [hoverHeartFillState, setHeartFillHoverState] = useState(false);
  const { useAddToCartMutation } = useCartMutation();
  const { useAddToWishlist } = useWishlistMutation();
  const { mutate } = useAddToCartMutation();
  const { mutate: mutateAddToWishlist } = useAddToWishlist();
  const { previewProductHandler } = useUI();
  const mobileDevice = useMediaQuery("(max-width:768px)");

  const fillEyeColor = hoverEyeFillState ? "white" : "black";
  const fillHeartColor = hoverHeartFillState ? "white" : "black";

  const { price, rating, title, thumbnail, brand, discountPercentage } =
    product;
  const productLink = toSlug(product.title);

  const discount = Math.round(product.discountPercentage);

  const imageDimension = mobileDevice
    ? { height: 130, width: 130 }
    : { height: 200, width: 200 };

  return (
    <div
      className={`rounded-lg bg-white relative border ${className} p-2 product lg:mr-4 lg:h-96`}
      onMouseMove={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      {hoverState && !mobileDevice && (
        <div className="button-view w-full z-30 absolute top-40">
          <Button
            className="bg-white shadow px-5 py-2 transition duration-200 ease-in-out delay-100 rounded-md mx-auto flex my-2 hover:bg-blue-900 hover:text-white"
            text="Add to Cart"
            onClick={() => mutate(product)}
          />
        </div>
      )}
      {product?.discountPercentage && (
        <Tag
          className="bg-blue-900 flex top-4 absolute z-10"
          text={`${discount} %`}
        />
      )}
      {/* {hoverState && !mobileDevice && ( */}
      <div className="icons flex flex-col absolute right-2 z-10  space-y-2">
        <Button
          className="bg-white shadow h-10 w-10 flex items-center justify-center  border rounded-md hover:bg-blue-900 hover:text-white"
          icon={<Heart fill={fillHeartColor} />}
          onMouseMove={() => setHeartFillHoverState(true)}
          onMouseOut={() => setHeartFillHoverState(false)}
          onClick={() => mutateAddToWishlist(product)}
        />
        <Button
          className="bg-white shadow px-2 h-10 w-10 hover:text-white flex justify-center items-center border rounded-md hover:bg-blue-900 hover:text-white"
          icon={<Eye fill={fillEyeColor} />}
          onMouseMove={() => setHoverEyeFillState(true)}
          onMouseOut={() => setHoverEyeFillState(false)}
          onClick={() => previewProductHandler(true, product)}
        />
      </div>
      {/* )} */}
      <Link href={`/product/${productLink}?id=${product.id}`}>
        <div className="image">
          <div className="image-view">
            <Image
              src={thumbnail}
              alt={title}
              className="h-32 w-full lg:h-52  mx-auto my-5"
              height={imageDimension.height}
              width={imageDimension.width}
              blurDataURL={thumbnail}
              placeholder="blur"
            />
          </div>
        </div>

        <div className="text-content w-full px-2 lg:px-0">
          <h4 className="name text-ellipsis truncate font-medium text-center text-lg">
            {title}
          </h4>
          <h4 className="brand text-ellipsis truncate text-gray-500 font-medium text-center text-md">
            {brand}
          </h4>
          <Price price={price} discountPercentage={discountPercentage} />
          {rating && <Ratings ratings={rating} />}
          {mobileDevice && (
            <Button
              className="bg-blue-900 text-white shadow px-5 py-2 mt-4 mb-1 rounded-md mx-auto flex"
              text="Add to Cart"
              onClick={() => mutate(product)}
            />
          )}
        </div>
      </Link>
    </div>
  );
}
