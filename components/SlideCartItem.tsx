import Image from "next/image";
import Link from "next/link";

import Price from "@/components/Price";
import useCart from "@/hooks/useCart";
import Button from "@/components/Button";
import AddPlus from "@/public/icon/AddPlus";
import Minus from "@/public/icon/Minus";
import Trash from "@/public/icon/Trash";
import { formatPrice } from "@/utils/formatPrice";
import toSlug from "@/utils/toSlug";
import usePrice from "@/hooks/usePrice";
import type { cartProductType } from "@/types";

interface Props {
  item: cartProductType;
  className?: string;
  mutateUpdateQuantity: any;
  mutateDelete: any;
}

export default function SlideCartItem({
  item,
  mutateUpdateQuantity,
  className,
  mutateDelete,
}: Props) {
  const { rate, currency } = usePrice();
  const _itemAmount = item.quantity * item.price * rate;
  const itemAmount = formatPrice(_itemAmount);
  const itemLink = toSlug(item.title);
  const { toggleSlideCart } = useCart();

  const controlClassName = className ? className : "lg:w-2/6";

  return (
    <li
      key={item.id}
      className="last:border-b-0 border-b flex-col lg:flex-row px-2 hover:bg-gray-100 py-2 border-gray-200 flex lg:justify-between lg:items-center w-full"
    >
      <Link
        href={`/product/${itemLink}?id=${item.id}`}
        className="w-4/6"
        onClick={toggleSlideCart}
      >
        <div className="product flex items-center space-x-3">
          <Image
            src={item.image}
            alt={item.title}
            height={200}
            className="w-2/3 lg:w-1/3 max-h-24"
            width={200}
            blurDataURL={item.image}
            placeholder="blur"
          />
          <div className="text-content w-full">
            <h3 className="text-ellipsis truncate">{item.title}</h3>
            <Price price={item.price} className="" />
            <p>
              X {item.quantity} = {currency.value}
              {itemAmount}
            </p>
          </div>
        </div>
      </Link>
      <div
        className={`controls mt-3 justify-between w-2/3 mx-auto lg:mx-0 ${controlClassName} flex`}
      >
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
