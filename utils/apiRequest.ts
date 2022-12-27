import { productType } from "@/types";
import axios from "axios";

export function fetchProducts(
  urlQuery?: string
): Promise<{ data: { products: productType[] } }> {
  const urlParams = urlQuery ? urlQuery : "";
  return axios.get(`https://dummyjson.com/products${urlParams}`);
}

export function fetchCategories(): Promise<{ data: string[] }> {
  return axios.get("https://dummyjson.com/products/categories");
}
