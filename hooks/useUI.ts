import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updatePreviewProduct } from "@/redux/ui-slice";
import type { productType } from "@/types";

export default function useUI() {
  const dispatch = useAppDispatch();
  const { previewProduct } = useAppSelector((state) => state.UI);

  function previewProductHandler(status: boolean, product: productType) {
    dispatch(updatePreviewProduct({ status, product }));
  }

  return {
    previewProduct,
    previewProductHandler,
  };
}
