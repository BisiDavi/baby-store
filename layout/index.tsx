import { PropsWithChildren } from "react";

import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  return (
    <>
      {!mobileDevice && <TopHeader />}
      <Header title={title} />
      <main className="flex mx-auto flex-col">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
