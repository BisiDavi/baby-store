import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Price from "@/components/Price";
import Ratings from "@/components/Ratings";
import WishlistIcon from "@/public/icon/Wishlist";
import useWishlistMutation from "@/hooks/useWishlistMutation";
import Layout from "@/layout";
import toSlug from "@/utils/toSlug";

export default function Wishlist() {
  const { wishlist, useRemoveProductFromWishlist } = useWishlistMutation();
  const { mutate } = useRemoveProductFromWishlist();

  console.log("wishlist", wishlist);

  return (
    <Layout title="View your wishlist | BestStores">
      <section className="container mx-auto py-4">
        <h4 className="text-center font-bold text-2xl">
          Products in your Wishlist
        </h4>
        {wishlist.length > 0 ? (
          <ul className="mt-6 space-y-4">
            {wishlist.map((item) => {
              const itemLink = toSlug(item.title);
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center hover:bg-gray-400 hover:text-white border p-4 pr-20 rounded"
                >
                  <Link
                    href={`/product/${itemLink}?id=${item.id}`}
                    className="w-4/5 flex items-center space-x-8"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      height={70}
                      width={70}
                      className="w-1/6"
                      blurDataURL={item.thumbnail}
                      placeholder="blur"
                    />
                    <div className="content w-3/5">
                      <h4 className="text-2xl font-bold">{item.title}</h4>
                      <Price
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                        className=""
                      />
                      <Ratings ratings={item.rating} className="" />
                    </div>
                  </Link>
                  <Button
                    className="border h-14 flex items-center  p-4 rounded hover:bg-gray-800"
                    icon={<WishlistIcon fill="red" />}
                    onClick={() => mutate(item.id)}
                  />
                </li>
              );
            })}
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
