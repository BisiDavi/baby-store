import { productType } from "@/types";
import Product from "@/components/Product";

interface Props {
  products: productType[];
}

export default function TopProductGrid({ products }: Props) {
  return (
    <ul className="grid px-0 lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-x-0">
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
