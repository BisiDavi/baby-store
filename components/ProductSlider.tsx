import { Splide, SplideSlide } from "@splidejs/react-splide";

import Product from "@/components/Product";
import "@splidejs/react-splide/css";
import { productType } from "@/types";

interface Props {
  products: productType[];
}

export default function ProductSlider({ products }: Props) {
  return (
    <>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            760: {
              perPage: 1,
              padding: "5rem",
            },
          },
        }}
      >
        {products.map((item) => (
          <SplideSlide key={item.id}>
            <Product product={item} />
          </SplideSlide>
        ))}
      </Splide>
      <style global jsx>
        {`
          .products .splide {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
