import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";

import useCart from "@/hooks/useCart";
import Price from "@/components/Price";
import toSlug from "@/utils/toSlug";
import Button from "@/components/Button";
import AddPlus from "@/public/icon/AddPlus";
import Minus from "@/public/icon/Minus";
import Trash from "@/public/icon/Trash";

export default function SlideCart() {
  const { toggleSlideCart, cart } = useCart();

  return (
    <aside className="flex items-center fixed top-0 z-50 left-0 h-screen w-screen">
      <div
        className="w-4/5 bg-gray-900 cursor-pointer opacity-80  w-full h-full"
        onClick={toggleSlideCart}
      ></div>
      <div className="w-2/5  px-4 py-8 bg-white w-full h-full">
        {cart && (
          <>
            <h5 className="text-xl font-bold flex my-2">
              Cart{" "}
              <span className="rounded-full bg-red-500 text-white h-5 w-5 text-xs flex items-center justify-center">
                {cart?.quantity}
              </span>
            </h5>
            <ul className="space-y4 overflow-y-scroll h-4/5">
              {cart?.items.map((item) => {
                const _itemAmount = item.quantity * item.price;
                const itemAmount = formatPrice(_itemAmount);
                const itemLink = toSlug(item.title);
                return (
                  <li
                    key={item.id}
                    className="border-b px-2 hover:bg-gray-100 py-2 border-gray-200 flex justify-between items-center w-full"
                  >
                    <Link
                      href={`/product/${itemLink}?id=${item.id}`}
                      className="w-4/6"
                    >
                      <div className="product flex items-center space-x-3">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          height={200}
                          className="w-1/3 max-h-24"
                          width={200}
                        />
                        <div className="text-content">
                          <h3 className="text-ellipsis truncate">
                            {item.title}
                          </h3>
                          <Price
                            price={item.price}
                            discountPercentage={item.discountPercentage}
                          />
                          <p>
                            X {item.quantity} = ${itemAmount}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="controls justify-between w-2/6 flex">
                      <Button
                        className=""
                        icon={
                          <AddPlus
                            className="bg-gray-500 hover:bg-green-500 rounded-md w-10 h-8 py-1"
                            fill="white"
                          />
                        }
                      />
                      <Button
                        className="bg-gray-500 flex items-center justify-center hover:bg-red-500 rounded-md w-10 h-8 py-2"
                        icon={<Minus />}
                      />
                      <Button className="" icon={<Trash />} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
