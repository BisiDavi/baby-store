import useCart from "@/hooks/useCart";
import useStripePayment from "@/hooks/useStripePayment";
import useCartMutation from "@/hooks/useCartMutation";
import SlideCartItem from "@/components/SlideCartItem";
import Button from "@/components/Button";
import { formatPrice } from "@/utils/formatPrice";
import usePrice from "@/hooks/usePrice";
import useFirebase from "@/hooks/useFirebase";
import Link from "next/link";

export default function OrderSummary() {
  const { cart } = useCart();
  const { getAuthdetails } = useFirebase();
  const userDetails = getAuthdetails();
  const { makePayment } = useStripePayment(cart, userDetails?.email);
  const { useDeleteProductFromCart, useUpdateProductQuantityMutation } =
    useCartMutation();
  const mutateDelete = useDeleteProductFromCart();
  const mutateUpdateQuantity = useUpdateProductQuantityMutation();
  const { rate, currency } = usePrice();

  const DELIVERY_FEE = 30 * rate;
  const disableButton = !userDetails ? true : false;
  const itemAmount = cart ? cart.amount * rate : 0;
  const total = cart ? DELIVERY_FEE + itemAmount : 0;

  return (
    <div className="w-full lg:w-2/3 mx-auto justify-center my-8">
      <h4 className="font-bold text-gray-500">ORDER SUMMARY</h4>
      <div className="order-summary shadow my-1 p-1 bg-white rounded">
        {cart && cart.items.length > 0 ? (
          <>
            <div className="cart-list">
              {cart.items.map((item) => (
                <SlideCartItem
                  key={item.id}
                  className="lg:w-1/6"
                  item={item}
                  mutateUpdateQuantity={mutateUpdateQuantity}
                  mutateDelete={mutateDelete}
                />
              ))}
            </div>
            <div className="total mt-4 px-4">
              <div className="row my-1 flex items-center justify-between">
                <h4 className="font-bold">Subtotal</h4>
                <h4>
                  {currency.value}
                  {formatPrice(itemAmount)}
                </h4>
              </div>
              {cart.amount < 1000 && (
                <div className="row my-1 flex items-center justify-between">
                  <h4 className="font-bold">Delivery Fee</h4>
                  <h4>
                    {currency.value}
                    {formatPrice(DELIVERY_FEE)}
                  </h4>
                </div>
              )}
              <div className="border-t row flex items-center justify-between py-2">
                <h4 className="font-bold">Total</h4>
                <h4 className="font-bold">
                  {currency.value}
                  {formatPrice(total)}
                </h4>
              </div>
            </div>
            <Button
              className="border bg-blue-500 text-white px-6 py-1 rounded-md mx-auto flex my-4 hover:bg-transparent hover:border-blue-500 hover:text-blue-500"
              text="Make Payment"
              disabled={disableButton}
              onClick={makePayment}
            />
          </>
        ) : (
          <Link href="/products">
            <Button
              text="Continue Shopping"
              className="mx-auto flex my-4 font-bold border border-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
