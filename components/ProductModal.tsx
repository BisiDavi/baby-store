import Modal from "@/components/Modal";
import useUI from "@/hooks/useUI";

export default function ProductModal() {
  const { previewProduct, previewProductHandler } = useUI();
  const { product, status } = previewProduct;
  return (
    <>
      {product && (
        <Modal
          modal={status}
          title={product.title}
          modalHandler={() => previewProductHandler(false, null)}
        >
          <div className="content"></div>
        </Modal>
      )}
    </>
  );
}
