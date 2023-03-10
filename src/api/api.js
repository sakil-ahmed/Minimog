import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://e-commerceapi.vercel.app/",
});

export const allProducts = async () => {
  const res = await productsApi.get("/minimog/products");
  return res.data;
};
