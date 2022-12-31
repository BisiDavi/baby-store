import { toast } from "react-toastify";
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

  function updateProductQuantity(type: "add" | "minus", id: string) {
    dispatch(updateQuantity({ type, id }));
  }

  function addToCartHandler(product: productType) {
    const { price, id, title, discountPercentage, thumbnail, images } = product;
    dispatch(
      addToCart({
        userEmail: "",
        product: {
          price,
          id,
          title,
          discountPercentage,
          quantity: 1,
          thumbnail,
          images,
        },
      })
    );
  }

  function deleteProductFromCart(id: string) {
    dispatch(deleteProduct({ id }));
    if (cart?.loading.text) {
      toast.success(cart?.loading.text);
    }
  }

  return {
    cart,
    toggleSlideCart,
    updateProductQuantity,
    addToCartHandler,
    deleteProductFromCart,
  };
}
