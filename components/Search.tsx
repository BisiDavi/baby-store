import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";
import SearchIcon from "@/public/icon/SearchIcon";
import { searchProducts } from "@/utils/apiRequest";
import Price from "@/components/Price";
import Ratings from "@/components/Ratings";
import toSlug from "@/utils/toSlug";
import CancelIcon from "@/public/icon/CancelIcon";
import SpinnerRipple from "@/components/SpinnerRipple";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchIt, setSearchIt] = useState(false);
  const { data, status } = useQuery(
    [`searchProducts-${query}`],
    () => searchProducts(query),
    {
      enabled: !!searchIt,
      onSuccess: () => setSearchIt(false),
    }
  );

  function cancelSearchQuery() {
    setQuery("");
  }

  function onSubmitHandler(e: any) {
    e.preventDefault();
    setSearchIt(true);
  }

  function onInputChange(e: any) {
    setQuery(e.target.value);
  }

  return (
    <div className="search w-1/2 relative">
      <form className="flex w-full" onSubmit={onSubmitHandler}>
        <input
          placeholder="Search for a product"
          className="bg-white px-4 border w-full py-1 rounded-l-lg"
          value={query}
          onChange={onInputChange}
          required
        />
        {query && (
          <Button
            className="text-white bg-gray-500 hover:opacity-50 px-4 py-1.5 "
            icon={<CancelIcon />}
            text=""
            onClick={cancelSearchQuery}
          />
        )}
        <Button
          className="text-white bg-blue-500 hover:opacity-50 px-4 py-1.5 rounded-r-lg"
          icon={<SearchIcon />}
          type="submit"
          text=""
        />
      </form>
      {query && (
        <div className="result absolute max-h-80 bg-white z-10 w-full p-4 overflow-y-scroll shadow">
          {status === "error" ? (
            <p>Error fetch search result</p>
          ) : status === "loading" ? (
            searchIt && <SpinnerRipple centerRipple />
          ) : (
            <>
              {data.data.products.length > 0 ? (
                <>
                  <div className="items-found flex items-end justify-end">
                    <span className="font-bold text-white bg-red-500 rounded-full px-4 fit-content mb-4">
                      {data.data.products.length} product
                      {data.data.products.length > 1 ? "s" : ""} found
                    </span>
                  </div>
                  <ul>
                    {data.data.products.map((item) => (
                      <li
                        key={item.id}
                        className="flex last:border-b-0 border-b p-2 hover:bg-gray-100"
                      >
                        <Link
                          href={`/product/${toSlug(item.title)}?id=${item.id}`}
                          className="w-full flex space-x-4"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            height={100}
                            width={100}
                            className="w-1/5"
                            blurDataURL={item.image}
                            placeholder="blur"
                          />
                          <div className="text">
                            <h4 className="text-xl font-bold my-2">
                              {item.title}
                            </h4>
                            <Price price={item.price} className="font-medium" />
                            <Ratings
                              ratings={item.rating}
                              className="items-start"
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>❌ No product for this search query</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
