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
          title={product.title}
          modalHandler={() => previewProductHandler(false, null)}
          modalHeaderClassName="w-screen"
        >
          <div className="content flex space-x-4 items-center">
            <div className="left w-1/2 flex flex-col">
              <Image
                src={product.images[0]}
                alt={product.title}
                height={500}
                width={500}
              />
              <ul className="image-group">
                {product.images.map((item) => (
                  <li key={product.id}>
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
              <p>{product.brand}</p>
              <h3>{product.title}</h3>
              <Price
                price={product.price}
                discountPercentage={product.discountPercentage}
              />
              <Ratings ratings={product.rating} />
              <div className="button-group space-y-4">
                <Button className="bg-blue-900" text="Add to Cart" />
                <Button className="border rounded-lg" text="Buy it Now" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
