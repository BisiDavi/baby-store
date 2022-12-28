import { useQuery } from "@tanstack/react-query";

import SpecialProductView from "@/components/SpecialProductView";
import SpinnerRipple from "@/components/SpinnerRipple";
import { fetchProducts } from "@/utils/apiRequest";

export default function SpecialProducts() {
  const { data, status } = useQuery(["fetch-special-products"], () =>
    fetchProducts("?limit=4&skip=21")
  );

  return (
    <div className="w-full my-2 lg:my-8 py-4">
      <h3 className="text-3xl font-bold text-center mb-4">Special Products</h3>
      <p className="text-center mb-10 text-lg lg:w-1/2 mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      {status === "error" ? (
        <p>Error fetching products</p>
      ) : status === "loading" ? (
        <SpinnerRipple centerRipple />
      ) : (
        status === "success" && (
          <SpecialProductView products={data.data.products} />
        )
      )}
    </div>
  );
}
