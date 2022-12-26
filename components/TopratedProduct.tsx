import { Splide, SplideSlide } from "@splidejs/react-splide";

import products from "@/json/products.json"; 
import Product from "@/components/Product";
import "@splidejs/react-splide/css";

export default function TopratedProduct() {
  return (
    <section className="container mx-auto relative mt-6 mb-10 flex flex-col">
      <h3 className="text-center text-3xl font-bold">Top rated Products</h3>
      <p className="text-center my-3 w-2/3 flex mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="products mt-4 flex slider w-full">
        <Splide options={{ perPage: 4 }}>
          {products.map((item) => (
            <SplideSlide key={item.name}>
              <Product key={item.name} product={item} />
            </SplideSlide>
          ))}
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
