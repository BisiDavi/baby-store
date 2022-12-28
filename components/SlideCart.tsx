import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateSlideCart } from "@/redux/ui-slice";

export default function SlideCart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function toogleSlideCart() {
    dispatch(updateSlideCart());
  }

  return (
    <aside className="flex items-center absolute top-0 z-50 left-0 h-screen w-screen">
      <div
        className="w-4/5 bg-gray-900 opacity-80  w-full h-full"
        onClick={toogleSlideCart}
      ></div>
      <div className="w-2/5 bg-white w-full h-full"></div>
    </aside>
  );
}
