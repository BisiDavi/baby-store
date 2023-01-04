import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Button from "@/components/Button";
import SearchIcon from "@/public/icon/SearchIcon";
import { searchProducts } from "@/utils/apiRequest";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchIt, setSearchIt] = useState(false);
  const { data, status } = useQuery(
    ["searchProducts"],
    () => searchProducts(query),
    {
      enabled: !!searchIt,
      onSuccess: () => setSearchIt(false),
    }
  );

  console.log("query", query);
  console.log("searchIt", searchIt);
  console.log("data", data, "status", status);

  function onSubmitHandler(e: any) {
    e.preventDefault();
    setSearchIt(true);
  }

  function onInputChange(e: any) {
    setQuery(e.target.value);
  }

  return (
    <form className="flex w-1/2" onSubmit={onSubmitHandler}>
      <input
        placeholder="Search for a product"
        className="bg-white px-4 border w-full py-1 rounded-l-lg"
        onChange={onInputChange}
      />
      <Button
        className="text-white bg-blue-500 hover:opacity-50 px-4 py-1.5 rounded-r-lg"
        icon={<SearchIcon />}
        text=""
        type="submit"
      />{" "}
    </form>
  );
}
