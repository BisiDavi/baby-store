import axios from "axios";
import { productType } from "@/types";

export function fetchProducts(
  urlQuery?: string
): Promise<{ data: { products: productType[] } }> {
  const urlParams = urlQuery ? urlQuery : "";
  return axios.get(`https://dummyjson.com/products${urlParams}`);
}

export function fetchCategories(): Promise<{ data: string[] }> {
  return axios.get("https://dummyjson.com/products/categories");
}

export function fetchCategoryProducts(
  category: string
): Promise<{ data: { products: productType[] } }> {
  return axios.get(`https://dummyjson.com/products/category/${category}`);
}

export function fetchAllProducts(): Promise<{
  data: { products: productType[] };
}> {
  return axios.get("https://dummyjson.com/products?limit=100");
}

export function searchProducts(query: string): Promise<{ data: string[] }> {
  return axios.get(`https://dummyjson.com/products/search?q=${query}`);
}
