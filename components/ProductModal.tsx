import Image from "next/image";
import Modal from "@/components/Modal";
import useUI from "@/hooks/useUI";
import Price from "./Price";
import Ratings from "./Ratings";
import Button from "./Button";

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
            <div className="left w-1/2 justify-between flex flex-col">
              <Image
                src={product.images[0]}
                alt={product.title}
                height={500}
                width={500}
                className="h-96"
              />
              <ul className="image-group flex space-x-2 mt-4">
                {product.images.map((item) => (
                  <li key={product.id} className="border p-2 rounded">
                    <Image
                      src={item}
                      alt={product.title}
                      height={100}
                      width={100}
                    />
                  </li>
                ))}
              </ul>
            </div>
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
                  className="bg-blue-900 text-white rounded-lg py-2"
                  text="Add to Cart"
                />
                <Button className="border rounded-lg py-2" text="Buy it Now" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
