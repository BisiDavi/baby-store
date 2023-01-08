import { useQuery } from "@tanstack/react-query";

import { fetchCategoryProducts } from "@/utils/apiRequest";
import ProductSlider from "@/components/ProductSlider";
import ProductLoader from "@/components/ProductLoader";
import useMediaQuery from "@/hooks/useMediaQuery";
import SpinnerRipple from "./SpinnerRipple";

interface Props {
  category: string;
  mainProductName: string;
}

export default function OtherCategoryProducts({
  category,
  mainProductName,
}: Props) {
  const mobileDevice = useMediaQuery("(max-width:768px");
  const { data, status } = useQuery(
    ["fetch-products-in-category"],
    () => fetchCategoryProducts(category),
    {
      enabled: !!category,
    }
  );
  const otherProducts =
    status === "success"
      ? data.data.products.filter((item) => item.title !== mainProductName)
      : [];
  return (
    <div>
      <h4 className="text-center font-bold text-2xl">View more {category}</h4>
      <div className="other-products mt-4">
        {status === "error" ? (
          <p>Error fetching products</p>
        ) : status === "loading" ? (
          mobileDevice ? (
            <SpinnerRipple centerRipple />
          ) : (
            <ProductLoader className="flex" />
          )
        ) : (
          <ProductSlider products={otherProducts} />
        )}
      </div>
    </div>
  );
}
