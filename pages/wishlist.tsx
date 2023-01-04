import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Price from "@/components/Price";
import Ratings from "@/components/Ratings";
import WishlistIcon from "@/public/icon/Wishlist";
import useWishlistMutation from "@/hooks/useWishlistMutation";
import Layout from "@/layout";

export default function Wishlist() {
  const { wishlist } = useWishlistMutation();

  console.log("wishlist", wishlist);

  return (
    <Layout title="View your wishlist | BestStores">
      <section className="container mx-auto py-4">
        <h4 className="text-center font-bold text-2xl">
          Products in your Wishlist
        </h4>
        {wishlist ? (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  height={100}
                  width={100}
                  className="w-1/5"
                />
                <div className="content w-3/5">
                  <h4>{item.title}</h4>
                  <Price
                    price={item.price}
                    discountPercentage={item.discountPercentage}
                  />
                  <Ratings ratings={item.rating} />
                </div>
                <Button
                  className="border p-4 rounded"
                  icon={<WishlistIcon />}
                />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="text-center font-bold text-xl text-red-500 mt-4">
              Oops, no products in your wishlist
            </p>
            <Link href="/products">
              <Button
                className="bg-blue-900 text-white font-bold mx-auto px-4 py-1 flex my-4 rounded hover:opacity-80"
                text="🛒 Continue Shopping"
              />
            </Link>
          </>
        )}
      </section>
    </Layout>
  );
}
