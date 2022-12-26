import { productType } from "@/types";
import axios from "axios";

export default function useProducts() {
  function fetchProducts(urlQuery?: string): Promise<{ data: productType[] }> {
    const urlParams = urlQuery ? urlQuery : "";
    return axios.get(`https://fakestoreapi.com/products${urlParams}`);
  }

  return {
    fetchProducts,
  };
}
