import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateSlideCart } from "@/redux/ui-slice";

export default function useCart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function toggleSlideCart() {
    dispatch(updateSlideCart());
  }

  return {
    cart,
    toggleSlideCart,
  };
}
