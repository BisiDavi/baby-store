import useCart from "@/hooks/useCart";

export default function SlideCart() {
  const { toggleSlideCart, cart } = useCart();

  return (
    <aside className="flex items-center fixed top-0 z-50 left-0 h-screen w-screen">
      <div
        className="w-4/5 bg-gray-900 cursor-pointer opacity-80  w-full h-full"
        onClick={toggleSlideCart}
      ></div>
      <div className="w-2/5 bg-white w-full h-full"></div>
    </aside>
  );
}
