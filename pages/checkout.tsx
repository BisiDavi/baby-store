import Layout from "@/layout";
import checkoutForm from "@/json/checkout.json";
import { displayForm } from "@/components/form";
import useCart from "@/hooks/useCart";
import SlideCartItem from "@/components/SlideCartItem";
import useCartMutation from "@/hooks/useCartMutation";

export default function Checkout() {
  const { cart } = useCart();
  const { useDeleteProductFromCart, useUpdateProductQuantityMutation } =
    useCartMutation();
  const mutateDelete = useDeleteProductFromCart();
  const mutateUpdateQuantity = useUpdateProductQuantityMutation();
  return (
    <Layout title="Checkout">
      <section className="container py-4 flex mx-auto space-x-6">
        <div className="w-2/3">
          <h4 className="font-bold text-gray-500">CHECKOUT</h4>
          <div className="bg-white shadow w-full rounded py-6 my-1">
            <div className="form-title border-b w-full px-4">
              1. ADDRESS DETAILS
            </div>
            <div className="form-content p-4">
              {checkoutForm.map((item, index) => {
                return (
                  <div
                    className="input-row flex space-x-4 justify-between"
                    key={index}
                  >
                    {item.map((inputItem) => (
                      <div className="form-wrapper w-full" key={inputItem.name}>
                        {displayForm(inputItem)}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <h4 className="font-bold text-gray-500">ORDER SUMMARY</h4>
          <div className="order-summary shadow my-1 p-1 bg-white rounded">
            {cart?.items.map((item) => (
              <SlideCartItem
                key={item.id}
                item={item}
                mutateUpdateQuantity={mutateUpdateQuantity}
                mutateDelete={mutateDelete}
                // className="last:border-b-0 border-b"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
