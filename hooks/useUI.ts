import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateAuthModal, updatePreviewProduct } from "@/redux/ui-slice";
import type { productType } from "@/types";

export default function useUI() {
  const dispatch = useAppDispatch();
  const { previewProduct , authModal} = useAppSelector((state) => state.UI);

  function previewProductHandler(status: boolean, product: productType | null) {
    dispatch(updatePreviewProduct({ status, product }));
  }

  function authModalHandler() {
    dispatch(updateAuthModal());
  }

  

  return {
    previewProduct,
    previewProductHandler,
    authModalHandler,
    authModal
  };
}
