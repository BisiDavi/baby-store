import Layout from "@/layout";
import OrderSummary from "@/components/OrderSummary";
import CheckoutForm from "@/components/form/CheckoutForm";

export default function Checkout() {
  return (
    <Layout title="Checkout">
      <section className="container py-4 flex mx-auto space-x-6">
        <CheckoutForm />
        <OrderSummary />
      </section>
    </Layout>
  );
}
