import useCart from "@/hooks/useCart";
import SlideCartItem from "@/components/SlideCartItem";
import useCartMutation from "@/hooks/useCartMutation";
import { formatPrice } from "@/utils/formatPrice";
import Button from "@/components/Button";

export default function OrderSummary() {
  const { cart } = useCart();
  const { useDeleteProductFromCart, useUpdateProductQuantityMutation } =
    useCartMutation();
  const mutateDelete = useDeleteProductFromCart();
  const mutateUpdateQuantity = useUpdateProductQuantityMutation();
  const DELIVERY_FEE = 80;
  const total = cart ? DELIVERY_FEE + cart.amount : 0;
  return (
    <div className="w-1/3">
      <h4 className="font-bold text-gray-500">ORDER SUMMARY</h4>
      <div className="order-summary shadow my-1 p-1 bg-white rounded">
        {cart && (
          <>
            <div className="cart-list">
              {cart.items.map((item) => (
                <SlideCartItem
                  key={item.id}
                  item={item}
                  mutateUpdateQuantity={mutateUpdateQuantity}
                  mutateDelete={mutateDelete}
                />
              ))}
            </div>
            <div className="total mt-4 px-4">
              <div className="row my-1 flex items-center justify-between">
                <h4 className="font-bold">Subtotal</h4>
                <h4>${formatPrice(cart.amount)}</h4>
              </div>
              {cart.amount < 1000 && (
                <div className="row my-1 flex items-center justify-between">
                  <h4 className="font-bold">Delivery Fee</h4>
                  <h4>${formatPrice(DELIVERY_FEE)}</h4>
                </div>
              )}
              <div className="border-t row flex items-center justify-between py-2">
                <h4 className="font-bold">Total</h4>
                <h4 className="font-bold">${formatPrice(total)}</h4>
              </div>
            </div>
            <Button
              className="border bg-blue-500 text-white px-6 py-1 rounded-md mx-auto flex my-4 hover:bg-transparent hover:border-blue-500 hover:text-blue-500"
              text="Make Payment"
              disabled
            />
          </>
        )}
      </div>
    </div>
  );
}
