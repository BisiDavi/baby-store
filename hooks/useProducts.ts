import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const { data, status } = useQuery(["get-top-rated-products"]);
}
