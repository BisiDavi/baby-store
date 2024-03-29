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

  return (
    <Layout title="View your wishlist | BestStores">
      <section className="container mx-auto py-4">
        <h4 className="text-center font-bold text-2xl">
          Products in your Wishlist
        </h4>
        {wishlist.length > 0 ? (
          <ul className="mt-6 space-y-4 px-4 lg:px-0">
            {wishlist.map((item) => {
              const itemLink = toSlug(item.title);
              return (
                <li
                  key={item.id}
                  className="flex w-full justify-between items-center hover:bg-gray-400 hover:text-white border p-4 lg:pr-20 rounded"
                >
                  <Link
                    href={`/product/${itemLink}?id=${item.id}`}
                    className="w-5/6 lg:w-4/5 flex items-center space-x-4 lg:space-x-8"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={70}
                      width={70}
                      className="lg:w-1/12 w-2/6"
                      blurDataURL={item.image}
                      placeholder="blur"
                    />
                    <div className="content lg:w-4/5">
                      <h4 className="text-lg lg:text-lg font-bold">
                        {item.title}
                      </h4>
                      <Price
                        price={item.price}
                        className=""
                      />
                      <Ratings ratings={item.rating} className="" />
                    </div>
                  </Link>
                  <Button
                    className="border h-10 lg:h-14 flex items-center p-2 lg:p-4 rounded hover:bg-gray-800"
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
