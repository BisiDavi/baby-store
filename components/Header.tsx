import Head from "next/head";

import useScroll from "@/hooks/useScroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/components/Logo";
import menuLink from "@/json/menu.json";
import Search from "@/public/icon/Search";
import Wishlist from "@/public/icon/Wishlist";
import Person from "@/public/icon/Person";
import ShoppingCart from "@/public/icon/ShoppingCart";
import Caret from "@/public/icon/Caret";
import { useAppSelector } from "@/redux/store";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const { scroll } = useScroll();
  const { cart } = useAppSelector((state) => state.cart);

  const fixedHeader = Number(scroll) > 300 ? "fixed w-full top-0 z-50" : "";

  return (
    <header
      className={`bg-white ${fixedHeader} px-4 lg:px-0 h-20 text-black border-b shadow flex`}
    >
      <Head>
        {title && <title>{title} | BestStores</title>}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="container mx-auto flex items-center justify-between">
        <Logo />
        {!mobileDevice && (
          <ul className="links hidden lg:flex text-xl">
            {menuLink.header.map((item) => (
              <li key={item.name} className="mx-6 flex">
                {item.name}{" "}
                {item.dropdown && <Caret className="w-4 mt-2 ml-1" />}
              </li>
            ))}
          </ul>
        )}
        <div className="icons flex space-x-4">
          <Search />
          <Wishlist />
          <Person />
          <div className="cart relative">
            {cart && (
              <span className="rounded-full bg-red-500 text-white h-5 w-5 text-xs flex items-center justify-center absolute -top-3 right-0">
                {cart?.quantity}
              </span>
            )}
            <ShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
}
