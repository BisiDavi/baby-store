import { fetchCategoryProducts } from "@/utils/apiRequest";
import { useQuery } from "@tanstack/react-query";

interface Props {
  category: string;
  mainProductName: string;
}

export default function OtherCategoryProducts({
  category,
  mainProductName,
}: Props) {
  const {} = useQuery(
    ["fetch-products-in-category"],
    () => fetchCategoryProducts(category),
    {
      enabled: !!category,
    }
  );
  return (
    <div>
      <h4 className="text-center font-bold text-2xl">View more {category}</h4>
    </div>
  );
}
