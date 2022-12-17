import Head from "next/head";
import Logo from "@/components/Logo";
import Search from "@/public/icon/Search";
import Wishlist from "@/public/icon/Wishlist";
import Person from "@/public/icon/Person";
import ShoppingCart from "@/public/icon/ShoppingCart";

export default function Header() {
  return (
    <header className="bg-white h-20 text-black border-b shadow flex">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="icons flex">
          <Search />
          <Wishlist />
          <Person />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
