import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/redux/store";

const TopHeader = dynamic(
  () => import(/* webpackChunkName: 'TopHeader' */ "@/components/TopHeader")
);
const SlideCart = dynamic(
  () => import(/* webpackChunkName: 'SlideCart' */ "@/components/SlideCart")
);

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const { showSlideCart } = useAppSelector((state) => state.UI);
  return (
    <>
      {showSlideCart && <SlideCart />}
      {!mobileDevice && <TopHeader />}
      <Header title={title} />
      <main className="flex mx-auto flex-col">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
