import axios from "axios";
import { productType } from "@/types";

export function fetchProducts(
  urlQuery?: string
): Promise<{ data: productType[] }> {
  const urlParams = urlQuery ? urlQuery : "";
  return axios.get(`https://fakestoreapi.com/products${urlParams}`);
}

export function fetchCategories(): Promise<{ data: string[] }> {
  return axios.get("https://fakestoreapi.com/products/categories");
}

export function fetchCategoryProducts(
  category: string
): Promise<{ data: productType[] }> {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`);
}

export function fetchAllProducts(): Promise<{
  data: { products: productType[] };
}> {
  return axios.get("/api/fetch-all-products");
}

export function searchProducts(
  query: string
): Promise<{ data: { products: productType[] } }> {
  return axios.get(`https://fakestoreapi.com/products/search?q=${query}`);
}
