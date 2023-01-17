import Image from "next/image";

import type { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductGridView({ product }: Props) {
  return (
    <div className="images w-full space-y-6 lg:space-y-0 lg:space-x-5 my-4 lg:flex-row flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.title}
        height={600}
        width={600}
        className="w-full lg:w-1/2 rounded-xl"
        // blurDataURL={product.image}
        // placeholder="blur"
        priority={true}
      />
    </div>
  );
}
