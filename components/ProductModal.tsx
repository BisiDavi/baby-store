import Image from "next/image";

import Modal from "@/components/Modal";
import useUI from "@/hooks/useUI";
import Price from "@/components/Price";
import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import useCartMutation from "@/hooks/useCartMutation";

export default function ProductModal() {
  const { previewProduct, previewProductHandler } = useUI();
  const { product, status } = previewProduct;
  const { useAddToCartMutation } = useCartMutation();
  const { mutate } = useAddToCartMutation();

  return (
    <>
      {product && (
        <Modal
          modal={status}
          modalHandler={() => previewProductHandler(false, null)}
        >
          <div className="content flex flex-col lg:flex-row lg:space-x-4 items-start">
            <Image
              src={product.image}
              alt={product.title}
              height={500}
              width={500}
              className="max-h-96 w-full lg:w-1/2 mx-auto"
              blurDataURL={product.image}
              placeholder="blur"
            />
            <div className="right lg:w-1/2 w-full">
              <p className="text-gray-400 my-1">{product.category}</p>
              <h3 className="text-xl">{product.title}</h3>
              <Price price={product.price} className="" />
              <Ratings className="left" ratings={product.rating} />
              <p className="my-2 hidden lg:flex">
                {product.description}
              </p>
              <div className="button-group flex mt-4 flex-col space-y-4">
                <Button
                  className="bg-blue-900 hover:opacity-80 text-white rounded-lg py-2"
                  text="Add to Cart"
                  onClick={() => mutate(product)}
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
