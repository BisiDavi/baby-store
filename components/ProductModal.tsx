import Modal from "@/components/Modal";
import useUI from "@/hooks/useUI";
import Price from "@/components/Price";
import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import ModalImageView from "@/components/ModalImageView";

export default function ProductModal() {
  const { previewProduct, previewProductHandler } = useUI();
  const { product, status } = previewProduct;

  return (
    <>
      {product && (
        <Modal
          modal={status}
          modalHandler={() => previewProductHandler(false, null)}
        >
          <div className="content flex space-x-4 items-start">
            <ModalImageView product={product} />
            <div className="right w-1/2">
              <p className="text-gray-400 my-1">{product.brand}</p>
              <h3 className="text-xl">{product.title}</h3>
              <Price
                price={product.price}
                discountPercentage={product.discountPercentage}
                className=""
              />
              <Ratings className="left" ratings={product.rating} />
              <p className="my-2">{product.description}</p>
              <div className="button-group flex mt-4 flex-col space-y-4">
                <Button
                  className="bg-blue-900 hover:opacity-80 text-white rounded-lg py-2"
                  text="Add to Cart"
                />
                <Button
                  className="border hover:bg-gray-400 hover:text-white rounded-lg py-2"
                  text="Buy it Now"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
