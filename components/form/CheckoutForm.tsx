import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { displayForm } from "@/components/form";
import Button from "@/components/Button";
import { checkoutFormSchema } from "@/components/form/checkout.schema";
import checkoutForm from "@/json/checkout.json";
import { updateCheckoutDetails } from "@/redux/checkout-slice";
import type { checkoutType } from "@/types";

export default function CheckoutForm() {
  const methods = useForm<checkoutType>({
    resolver: yupResolver(checkoutFormSchema),
    mode: "all",
  });
  const dispatch = useDispatch();

  function onSubmit(data: checkoutType) {
    console.log("data", data);
    dispatch(updateCheckoutDetails(data));
  }

  return (
    <div className="checkout">
      <h4 className="font-bold text-gray-500">CHECKOUT</h4>
      <FormProvider {...methods}>
        <form
          className="bg-white shadow w-full rounded py-6 my-1"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
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
          <Button
            className="mx-auto border my-4 bg-blue-500 text-white flex px-6 py-1 rounded hover:bg-transparent hover:border-blue-500 hover:text-blue-500"
            type="submit"
            text="Submit"
          />
        </form>
      </FormProvider>
    </div>
  );
}
