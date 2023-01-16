import Layout from "@/layout";
import OrderSummary from "@/components/OrderSummary";
import CheckoutForm from "@/components/form/CheckoutForm";
import CheckoutFormGroup from "@/components/form/CheckoutFormGroup";

export default function Checkout() {
  return (
    <Layout title="Checkout">
      <section className="container py-4 flex mx-auto space-x-6">
        <CheckoutFormGroup>
          <CheckoutForm />
        </CheckoutFormGroup>
        <OrderSummary />
      </section>
    </Layout>
  );
}
