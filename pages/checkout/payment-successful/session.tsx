import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@/components/Button";
import Layout from "@/layout";
import { resetCart } from "@/redux/cart-slice";
import { useAppDispatch } from "@/redux/store";
import { GetServerSidePropsContext } from "next";

interface Props {
  session_id: string;
}

export default function CheckoutSuccessPage({ session_id }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session_id) {
      dispatch(resetCart());
    }
  }, []);

  console.log("router", router);

  return (
    <Layout title="Thanks for purchasing from us">
      <section className="my-8 container mx-auto ">
        {session_id && (
          <div className="appreciaton mx-auto py-4 w-4/5 lg:w-2/3 bg-white shadow rounded my-4">
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
        )}
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("context.params", context.params);
  console.log("context.query", context.query);
  console.log("context.resolvedUrl", context.resolvedUrl);

  if (!context.query.id) {
    return {
      redirect: {
        destination: "/products",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session_id: context.query.id,
    },
  };
}
