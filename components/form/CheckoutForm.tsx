import { displayForm } from "@/components/form";
import checkoutForm from "@/json/checkout.json";

export default function CheckoutForm({}) {
  return (
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
  );
}
