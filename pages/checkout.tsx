import Layout from "@/layout";

export default function Checkout() {
  return (
    <Layout title="Checkout">
      <section className="container py-4 flex items-center mx-auto space-x-6">
        <div className="w-2/3">
          <h4 className="font-bold text-gray-500">CHECKOUT</h4>
          <div className="bg-white w-full rounded">
            <div className="form-title border-b w-full">
              1. ADDRESS DETAILS

            </div>
          </div>
        </div>
        <div className="w-1/3">
          <h4 className="font-bold text-gray-500">ORDER SUMMARY</h4>
        </div>
      </section>
    </Layout>
  );
}
