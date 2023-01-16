import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@/components/Button";
import Layout from "@/layout";
import { resetCart } from "@/redux/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function CheckoutSuccessPage() {
  const { cart } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (cart) {
      dispatch(resetCart());
    }
  }, []);

  console.log("router", router);

  return (
    <Layout title="Thanks for purchasing from us">
      <section className="my-8 container mx-auto ">
        <div className="appreciaton mx-auto py-4 w-2/3 bg-white shadow rounded my-4">
          <h3 className=" text-2xl font-bold mt-4 text-center">
            🤩 Thanks for purchasing from BestStores
          </h3>
          <Link href="/products">
            <Button
              className="mx-auto flex my-4 border px-4 py-2 border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
              text="Continue Shop"
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
