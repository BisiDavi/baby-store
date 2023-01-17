import { addToCart, deleteProduct, updateQuantity } from "@/redux/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateSlideCart } from "@/redux/ui-slice";
import type { productType } from "@/types";

export default function useCart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function toggleSlideCart() {
    dispatch(updateSlideCart());
  }

  function updateProductQuantity(type: "add" | "minus", id: number) {
    dispatch(updateQuantity({ type, id }));
  }

  function addToCartHandler(product: productType) {
    const { price, id, title, image } = product;
    dispatch(
      addToCart({
        userEmail: "",
        product: {
          price,
          id,
          image,
          title,
          quantity: 1,
        },
      })
    );
  }

  function deleteProductFromCart(id: number) {
    dispatch(deleteProduct({ id }));
  }

  return {
    cart,
    toggleSlideCart,
    updateProductQuantity,
    addToCartHandler,
    deleteProductFromCart,
  };
}
