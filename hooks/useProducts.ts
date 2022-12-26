import axios from "axios";

export default function useProducts() {
  function fetchProducts() {
    return axios.get("https://fakestoreapi.com/products");
  }

  return {
    fetchProducts,
  };
}
