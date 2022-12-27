import { PropsWithChildren } from "react";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <TopHeader />
      <Header />
      <main className="flex mx-auto flex-col">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
