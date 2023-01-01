import Link from "next/link";

import useCart from "@/hooks/useCart";
import Button from "@/components/Button";
import useCartMutation from "@/hooks/useCartMutation";
import SlideCartItem from "@/components/SlideCartItem";
import { formatPrice } from "@/utils/formatPrice";

export default function SlideCart() {
  const { useDeleteProductFromCart, useUpdateProductQuantityMutation } =
    useCartMutation();
  const mutateDelete = useDeleteProductFromCart();
  const mutateUpdateQuantity = useUpdateProductQuantityMutation();

  const { toggleSlideCart, cart } = useCart();

  return (
    <aside className="flex items-center fixed top-0 z-50 left-0 h-screen w-screen">
      <div
        className="w-1/5 lg:w-4/5 bg-gray-900 cursor-pointer opacity-80  w-full h-full"
        onClick={toggleSlideCart}
      ></div>
      <div className="w-4/5 lg:w-2/5  px-4 py-8 bg-white w-full h-full">
        {cart && (
          <>
            <h5 className="text-xl font-bold flex my-2">
              Cart{" "}
              <span className="rounded-full bg-red-500 text-white h-5 w-5 text-xs flex items-center justify-center">
                {cart?.quantity}
              </span>
            </h5>
            {cart && cart.items.length > 0 ? (
              <>
                <ul className="space-y4 overflow-y-scroll h-5/6">
                  {cart?.items.map((item) => (
                    <SlideCartItem
                      key={item.id}
                      item={item}
                      mutateUpdateQuantity={mutateUpdateQuantity}
                      mutateDelete={mutateDelete}
                    />
                  ))}
                </ul>
                <div className="cart-prices font-bold border rounded text-xl shadow-xl  px-4 h-20 flex items-center justify-between">
                  <h6>Subtotal</h6>
                  <h6>${formatPrice(cart.amount)}</h6>
                </div>
              </>
            ) : (
              <>
                <p className="font-bold text-center text-xl">
                  Oops cart 🛒 is empty
                </p>
                <Link href="/products">
                  <Button
                    className="bg-black text-white px-4 py-2 mx-auto flex my-4 hover:opacity-80"
                    text="Continue Shopping"
                    onClick={toggleSlideCart}
                  />
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
