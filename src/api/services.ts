import { orderBy } from "lodash";

import { products } from "./dummyData/products";
import { featuredProducts } from "./dummyData/featuredProducts";
import { carouselItems } from "./dummyData/carouselItems";

import { IRequestParam } from "../interfaces/IRequestParam";

const fetchProductById = (id: string) => {
  const product = products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  return product;
};

const fetchProductsByCategory = (param: IRequestParam) => {
  const { category, filterBy = "", sortBy = "" } = param;

  let productList = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (Boolean(filterBy)) {
    productList = filterProductList(filterBy, productList);
  }

  if (Boolean(sortBy)) {
    productList = sortProductList(sortBy, productList);
  }

  return productList;
};

const fetchFeaturedProducts = () => {
  return products.filter((product) => featuredProducts.includes(product.id));
};

const fetchCarouselItems = () => {
  return carouselItems.map((item) => {
    const productList = item.products.map((id) => fetchProductById(id));
    return { ...item, products: productList };
  });
};

const filterProductList = (filterBy: string, productList: any): any => {
  switch (filterBy) {
    case "hot":
      return productList.filter((product: any) => product.reviews >= 50);
    case "rating":
      return productList.filter((product: any) => product.rating >= 4);
    case "deal":
      return productList.filter((product: any) => product.price < 10);
    default:
      return productList;
  }
};

const sortProductList = (sortBy: string, productList: any): any => {
  switch (sortBy) {
    case "name":
      return orderBy(productList, ["name"], ["asc"]);
    case "price":
      return orderBy(productList, ["price"], ["asc"]);
    default:
      return productList;
  }
};

export const service = {
  fetchProductsByCategory: fetchProductsByCategory,
  fetchFeaturedProducts: fetchFeaturedProducts,
  fetchCarouselItems: fetchCarouselItems,
  fetchProductById: fetchProductById,
};
