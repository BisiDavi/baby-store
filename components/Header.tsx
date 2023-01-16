import Link from "next/link";

import useScroll from "@/hooks/useScroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/components/Logo";
import Wishlist from "@/public/icon/Wishlist";
import Person from "@/public/icon/Person";
import ShoppingCart from "@/public/icon/ShoppingCart";
import Button from "@/components/Button";
import useCart from "@/hooks/useCart";
import Search from "@/components/Search";
import useWishlistMutation from "@/hooks/useWishlistMutation";
import useUI from "@/hooks/useUI";
import useFirebase from "@/hooks/useFirebase";
import Logout from "@/public/icon/Logout";

export default function Header() {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const { scroll } = useScroll();
  const { authModalHandler } = useUI();
  const { cart, toggleSlideCart } = useCart();
  const { wishlist } = useWishlistMutation();
  const { getAuthdetails, authSignOut } = useFirebase();
  const userDetails = getAuthdetails();

  const userName =
    userDetails && userDetails?.displayName
      ? userDetails?.displayName
      : userDetails?.email
      ? userDetails.email
      : "";

  const fixedHeader = Number(scroll) > 300 ? "fixed w-full top-0 z-40" : "";
  const wishlistFill = wishlist && wishlist.length > 0 ? "red" : "black";
  return (
    <header
      className={`bg-white ${fixedHeader} px-4 lg:px-0 h-20 text-black border-b shadow flex`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Logo />
        {!mobileDevice && <Search />}
        <div className="icons  items-end flex flex-col">
          <div className="top flex items-center space-x-4">
            <Link href="/wishlist" className="wishlist relative">
              <Wishlist fill={wishlistFill} />
              {wishlist && wishlist.length > 0 && (
                <span className="rounded-full bg-white border-red-500 border text-red-500 h-5 w-5 text-xs flex items-center justify-center absolute -top-3 -right-1">
                  {wishlist?.length}
                </span>
              )}
            </Link>
            {userDetails ? (
              <Button icon={<Logout />} onClick={authSignOut} />
            ) : (
              <Button icon={<Person />} onClick={authModalHandler} />
            )}
            <div
              className="cart relative cursor-pointer"
              onClick={toggleSlideCart}
            >
              {cart && cart.quantity > 0 && (
                <span className="rounded-full bg-red-500 text-white h-5 w-5 text-xs flex items-center justify-center absolute -top-2 right-0">
                  {cart?.quantity}
                </span>
              )}
              <Button className="mb-0 mt-1" icon={<ShoppingCart />} />
            </div>
          </div>
          {userDetails && (
            <div className="bottom">
              <p className="text-blue-500 font-bold text-sm">
                👋 Hello, {userName}
              </p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
