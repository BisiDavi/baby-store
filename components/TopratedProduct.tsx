import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "@tanstack/react-query";

import Product from "@/components/Product";
import useProducts from "@/hooks/useProducts";
import "@splidejs/react-splide/css";

export default function TopratedProduct() {
  const { fetchProducts } = useProducts();
  const { data, status } = useQuery(["get-top-rated-products"], () =>
    fetchProducts("?limit=12")
  );

  return (
    <section className="container mx-auto relative mt-6 mb-10 flex flex-col">
      <h3 className="text-center text-3xl font-bold">Top rated Products</h3>
      <p className="text-center my-3 w-2/3 flex mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="products mt-4 flex slider w-full">
        <Splide options={{ perPage: 4 }}>
          {status === "error" ? (
            <p>Error fetching products</p>
          ) : status === "loading" ? (
            <p>Fetching products</p>
          ) : (
            status === "success" &&
            data?.data.map((item) => (
              <SplideSlide key={item.id}>
                <Product product={item} />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
      <style global jsx>
        {`
          .products .splide {
            width: 100%;
          }
        `}
      </style>
    </section>
  );
}
