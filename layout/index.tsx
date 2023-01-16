import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import { useAppSelector } from "@/redux/store";

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

  return (
    <>
      {showSlideCart && <SlideCart />}
      <TopHeader />
      {previewProduct.status && previewProduct.product && <AuthModal />}
      {previewProduct.status && previewProduct.product && <ProductModal />}
      <Header title={title} />
      <main className="flex mx-auto flex-col bg-gray">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
