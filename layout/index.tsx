import Head from "next/head";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import { useAppSelector } from "@/redux/store";
import useAuthModal from "@/hooks/useAuthModal";

const SlideCart = dynamic(
  () => import(/* webpackChunkName: 'SlideCart' */ "@/components/SlideCart")
);

const ProductModal = dynamic(
  () =>
    import(/* webpackChunkName: 'ProductModal' */ "@/components/ProductModal")
);

const AuthModal = dynamic(
  () => import(/* webpackChunkName: 'AuthModal' */ "@/components/AuthModal")
);

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const { showSlideCart, previewProduct } = useAppSelector((state) => state.UI);
  const { modalState, modalHandler } = useAuthModal();

  return (
    <>
      {showSlideCart && <SlideCart />}
      <Head>
        {title && <title>{title} | BestStores</title>}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      {modalState && (
        <AuthModal modal={modalState} modalHandler={modalHandler} />
      )}
      {previewProduct.status && previewProduct.product && <ProductModal />}
      <Header />
      <main className="flex mx-auto flex-col bg-gray">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
