import Layout from "@/layout";
import checkoutForm from "@/json/checkout.json";
import { displayForm } from "@/components/form";

export default function Checkout() {
  return (
    <Layout title="Checkout">
      <section className="container py-4 flex items-center mx-auto space-x-6">
        <div className="w-2/3">
          <h4 className="font-bold text-gray-500">CHECKOUT</h4>
          <div className="bg-white w-full rounded py-6">
            <div className="form-title border-b w-full px-4">
              1. ADDRESS DETAILS
            </div>
            <div className="form-content p-4">
              {checkoutForm.map((item, index) => {
                return (
                  <div className="input-row" key={index}>
                    {item.map((inputItem) => (
                      <div className="form-wrapper" key={inputItem.name}>
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
        </div>
      </section>
    </Layout>
  );
}
