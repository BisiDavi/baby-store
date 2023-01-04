import { productType } from "@/types";
import Product from "@/components/Product";

interface Props {
  products: productType[];
}

export default function TopProductGrid({ products }: Props) {
  return (
    <ul className="grid px-0 lg:grid-cols-4 grid-cols-2  gap-y-4 gap-4 lg:gap-2">
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
