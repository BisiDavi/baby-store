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
        className="w-1/12 lg:w-4/5 bg-gray-900 cursor-pointer opacity-80 h-full"
        onClick={toggleSlideCart}
      ></div>
      <div className="w-11/12 lg:w-2/5  px-4 py-8 bg-white h-full">
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
                <div className="cart-prices font-bold border rounded text-xl shadow-xl mx-auto justify-center p-4 mb-4  flex flex-col">
                  <div className="text flex w-full items-center justify-between">
                    <h6>Subtotal</h6>
                    <h6>${formatPrice(cart.amount)}</h6>
                  </div>
                  <Link href="/checkout">
                    <Button
                      className="bg-red-500 justify-center flex text-white my-4 py-0.5 text-lg hover:opacity-80 rounded-full px-6 fit-content mx-auto"
                      text="Checkout →"
                      onClick={toggleSlideCart}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="font-bold text-center lg:text-2xl">
                  Oops cart 🛒 is empty
                </p>
                <Link href="/products">
                  <Button
                    className="bg-black text-white  px-4 py-2 mx-auto flex my-2 hover:opacity-80"
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
