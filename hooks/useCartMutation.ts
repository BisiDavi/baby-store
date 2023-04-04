import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import useCart from "@/hooks/useCart";
import type { productType } from "@/types";

export default function useCartMutation() {
  const { addToCartHandler, updateProductQuantity, deleteProductFromCart } =
    useCart();

  function useAddToCartMutation() {
    return useMutation(
      async (product: productType) => addToCartHandler(product),
      {
        mutationKey: ["useAddToCartMutation"],
        onSuccess: () => {
          toast.success("product added to cart");
        },
      }
    );
  }

  function useUpdateProductQuantityMutation() {
    return useMutation(
      async ({ type, id }: { type: "add" | "minus"; id: number }) =>
        updateProductQuantity(type, id),
      {
        mutationKey: ["updateProductQuantityMutation"],
      }
    );
  }

  function useDeleteProductFromCart() {
    return useMutation(async (id: number) => deleteProductFromCart(id), {
      mutationKey: ["useDeleteProductFromCart"],
      onSuccess: () => {
        toast.success("product removed from cart");
      },
    });
  }

  return {
    useAddToCartMutation,
    useUpdateProductQuantityMutation,
    useDeleteProductFromCart,
  };
}
