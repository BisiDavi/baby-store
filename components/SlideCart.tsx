import useCart from "@/hooks/useCart";
import Image from "next/image";
import Price from "./Price";

export default function SlideCart() {
  const { toggleSlideCart, cart } = useCart();

  return (
    <aside className="flex items-center fixed top-0 z-50 left-0 h-screen w-screen">
      <div
        className="w-4/5 bg-gray-900 cursor-pointer opacity-80  w-full h-full"
        onClick={toggleSlideCart}
      ></div>
      <div className="w-2/5 bg-white w-full h-full">
        <h5>Cart</h5>
        {cart && (
          <ul>
            {cart?.items.map((item) => (
              <li key={item.id}>
                <div className="product">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    height={200}
                    width={200}
                  />
                  <div className="text-content">
                    <h3>{item.title}</h3>
                    <Price
                      price={item.price}
                      discountPercentage={item.discountPercentage}
                    />
                  </div>
                </div>
                <div className="controls"></div>
                <div className="price"></div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
