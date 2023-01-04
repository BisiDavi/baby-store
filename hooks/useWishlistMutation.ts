import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "@/redux/store";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "@/redux/wishlist-slice";
import type { productType } from "@/types";

export default function useWishlistMutation() {
  const dispatch = useAppDispatch();

  function useAddToWishlist() {
    return useMutation(
      async (product: productType) => dispatch(addProductToWishlist(product)),
      {
        mutationKey: ["useAddToWishlist"],
        onSuccess: () => {
          toast.success("product added to wishlist");
        },
      }
    );
  }

  function useRemoveProductFromWishlist() {
    return useMutation(
      async (id: string) => dispatch(removeProductFromWishlist(id)),
      {
        mutationKey: ["useRemoveProductFromWishlist"],
        onSuccess: () => {
          toast.success("product removed from wishlist");
        },
      }
    );
  }

  return { useAddToWishlist, useRemoveProductFromWishlist };
}
