import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
