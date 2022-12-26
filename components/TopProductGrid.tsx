import { productType } from "@/types";
import Product from "./Product";

interface Props {
  products: productType[];
}

export default function TopProductGrid({ products }: Props) {
  return (
    <ul className="grid grid-cols-4 gap-x-2 gap-y-6">
      {products.map((product) => (
        <li key={product.id} className="">
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
