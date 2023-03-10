import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/utils/apiRequest";
import ProductSlider from "@/components/ProductSlider";
import ProductLoader from "@/components/ProductLoader";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function TopratedProduct() {
  const { data, status } = useQuery(["get-top-rated-products"], () =>
    fetchProducts("?limit=12")
  );
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const numberOfLoaders = mobileDevice ? 1 : 4;
  const loaderClassName = mobileDevice
    ? "flex w-full mx-auto justify-center"
    : "flex";

  return (
    <section className="container px-4 lg:px-0 mx-auto relative mt-6 mb-10 flex flex-col">
      <h3 className="text-center text-3xl font-bold">Top rated Products</h3>
      <p className="text-center my-3 lg:w-2/3 flex mx-auto">
        Buy phones from brands like iphone, samsung, huawei and laptops like
        macbook,HP, Microsoft Surface
      </p>
      <div className="products lg:mt-4 mt-10 flex slider w-full">
        {status === "error" ? (
          <p>Error fetching products</p>
        ) : status === "loading" ? (
          <ProductLoader
            className={loaderClassName}
            arrayCount={numberOfLoaders}
          />
        ) : (
          status === "success" && <ProductSlider products={data.data} />
        )}
      </div>
    </section>
  );
}
