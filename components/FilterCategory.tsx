import { Dispatch, SetStateAction } from "react";

interface Props {
  categoryData: { data: string[] } | undefined;
  categoryStatus: "success" | "loading" | "error";
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function FilterCategory({
  categoryData,
  categoryStatus,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  function selectCateory(category: string) {
    setSelectedCategory(category);
  }

  const activeHome =
    selectedCategory === "?limit=100" ? "bg-blue-900 text-white" : "";

  return (
    <div className="filters py-2 px-4 bg-white shadow lg:p-4 w-full lg:w-1/5 rounded border">
      <h3 className="font-bold text-xl">Filter By Category</h3>
      <ul className="w-full flex items-start space-x-4 overflow-x-scroll lg:overflow-none lg:space-x-0 lg:flex-col ">
        {categoryStatus === "error" ? (
          <p>unable to fetch category</p>
        ) : categoryStatus === "loading" ? (
          <p>fetching categories ...</p>
        ) : (
          <>
            <li
              className={`${activeHome} my-2 rounded border max-w-4xl  lg:fit-conten px-4 py-1 hover:bg-gray-800 hover:text-white`}
              onClick={() => selectCateory("?limit=100")}
            >
              All
            </li>
            {categoryData &&
              categoryData.data.map((item) => {
                const activeCategory =
                  selectedCategory === `/category/${item}`
                    ? "bg-blue-900 text-white"
                    : "";
                return (
                  <li
                    key={item}
                    className={`${activeCategory} capitalize whitespace-nowrap my-2 rounded border fit-content px-4 py-1 hover:bg-gray-800 hover:text-white`}
                    onClick={() => selectCateory(`/category/${item}`)}
                  >
                    {item}
                  </li>
                );
              })}
          </>
        )}
      </ul>
    </div>
  );
}
