import getCostPrice from "@/utils/getCostPrice";
import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import ShoppingCart from "@/public/icon/ShoppingCart";
import AddPlus from "@/public/icon/AddPlus";
import ProductGridView from "@/components/ProductGridView";
import { formatPrice } from "@/utils/formatPrice";
import useCartMutation from "@/hooks/useCartMutation";
import type { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  const price = formatPrice(product.price);
  const oldPrice = getCostPrice(product.price, product.discountPercentage);
  const discount = Math.round(product.discountPercentage);
  const category = product.category.toUpperCase();
  const { useAddToCartMutation } = useCartMutation();
  const { mutate } = useAddToCartMutation();

  return (
    <div className="w-full flex-col px-4 lg:px-0 flex my-8">
      <div className="category border rounded-full fit-content px-4 bg-blue-900 text-white py-1">
        {category}
      </div>
      <ProductGridView product={product} />
      <div className="text-cotent flex flex-col bg-white px-4 py-6 rounded-lg shadow lg:flex-row items-center">
        <div className="order-2 text-content w-full lg:w-1/2 px-0 flex flex-col">
          <p className="text-gray-500 font-medium">{product.brand}</p>
          <h3 className="text-2xl font-bold"> {product.title}</h3>
          <p className="fit-content hover:bg-orange-500 hover:text-white text-orange-500 rounded-full border w-auto px-2 my-1 flex">
            {discount} % discount
          </p>
          <div className="price flex space-x-2">
            <h5 className="text-xl font-medium">${price}</h5>
            <h6 className="text- line-through font-medium">${oldPrice}</h6>
          </div>
          <Ratings ratings={product.rating} className="text-left" />
          <p className="mt-2">{product.description}</p>
        </div>
        <div className="cta order-1 w-full mb-4 lg:mb-0 sm:items-start lg:order-2  flex justify-between lg:flex-row lg:w-1/4">
          <Button
            text="Add to Cart"
            className="bg-blue-500 flex items-center text-white rounded-lg px-4 py-1 hover:opacity-80"
            icon={<AddPlus fill="white" className="mr-3" />}
            onClick={() => mutate(product)}
          />
          <Button
            icon={<ShoppingCart fill="white" className="mr-3" />}
            text="Buy Now"
            className="flex items-center bg-red-500 text-white hover:opacity-80 rounded-lg px-4 py-1"
          />
        </div>
      </div>
    </div>
  );
}
