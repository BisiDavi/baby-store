import Image from "next/image";
import Link from "next/link";

import Price from "@/components/Price";
import Button from "@/components/Button";
import AddPlus from "@/public/icon/AddPlus";
import Minus from "@/public/icon/Minus";
import Trash from "@/public/icon/Trash";
import { formatPrice } from "@/utils/formatPrice";
import toSlug from "@/utils/toSlug";
import type { cartProductType } from "@/types";
import useCart from "@/hooks/useCart";

interface Props {
  item: cartProductType;
  mutateUpdateQuantity: any;
  mutateDelete: any;
}

export default function SlideCartItem({
  item,
  mutateUpdateQuantity,
  mutateDelete,
}: Props) {
  const _itemAmount = item.quantity * item.price;
  const itemAmount = formatPrice(_itemAmount);
  const itemLink = toSlug(item.title);
  const { toggleSlideCart } = useCart();

  return (
    <li
      key={item.id}
      className="border-b flex-col lg:flex-row px-2 hover:bg-gray-100 py-2 border-gray-200 flex lg:justify-between lg:items-center w-full"
    >
      <Link
        href={`/product/${itemLink}?id=${item.id}`}
        className="w-4/6"
        onClick={toggleSlideCart}
      >
        <div className="product flex items-center space-x-3">
          <Image
            src={item.images[0]}
            alt={item.title}
            height={200}
            className="w-1/3 max-h-24"
            width={200}
            blurDataURL={item.images[0]}
            placeholder="blur"
          />
          <div className="text-content">
            <h3 className="text-ellipsis truncate">{item.title}</h3>
            <Price
              price={item.price}
              discountPercentage={item.discountPercentage}
              className=""
            />
            <p>
              X {item.quantity} = ${itemAmount}
            </p>
          </div>
        </div>
      </Link>
      <div className=" controls mt-3 justify-between w-2/3 mx-auto lg:mx-0 lg:w-2/6 flex">
        <Button
          className=""
          icon={
            <AddPlus
              className="bg-gray-500 hover:bg-green-500 rounded-md w-10 h-8 py-1"
              fill="white"
            />
          }
          onClick={() =>
            mutateUpdateQuantity.mutate({
              type: "add",
              id: item.id,
            })
          }
        />
        <Button
          className="bg-gray-500 flex items-center justify-center hover:bg-red-500 rounded-md w-10 h-8 py-2"
          icon={<Minus />}
          onClick={() =>
            mutateUpdateQuantity.mutate({
              type: "minus",
              id: item.id,
            })
          }
        />
        <Button
          className=""
          icon={<Trash />}
          onClick={() => mutateDelete.mutate(item.id)}
        />
      </div>
    </li>
  );
}
