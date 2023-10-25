import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { service } from "../../api/services";
import { IProduct } from "../../interfaces/IProduct";
import { ICarouselItem } from "../../interfaces/ICarouselItem";
import { IRequestParam } from "../../interfaces/IRequestParam";

import {
  PRODUCTS_SLICE,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_CATEGORY,
  FETCH_FEATURED_PRODUCT,
  FETCH_CAROUSEL_ITEM,
} from "../../constants";

interface IProductsState {
  value: number;
  product: IProduct;
  productList: IProduct[];
  carouselItems: ICarouselItem[];
}

const initialState: IProductsState = {
  value: 0,
  product: {
    id: "",
    image: "",
    name: "",
    category: "",
    rating: 0,
    price: 0,
    reviews: 0,
    sizes: [],
    desc: "",
  },
  productList: [],
  carouselItems: [],
};

export const fetchProductById = createAsyncThunk<IProduct, string>(
  `${PRODUCTS_SLICE}/${FETCH_PRODUCT_BY_ID}`,
  async (id: string) => {
    const response = service.fetchProductById(id);
    return response as IProduct;
  }
);

export const fetchProductsByCategory = createAsyncThunk<
  IProduct[],
  IRequestParam
>(
  `${PRODUCTS_SLICE}/${FETCH_PRODUCT_BY_CATEGORY}`,
  async (param: IRequestParam) => {
    const response = service.fetchProductsByCategory(param);
    return response as IProduct[];
  }
);

export const fetchFeaturedProducts = createAsyncThunk<IProduct[], null>(
  `${PRODUCTS_SLICE}/${FETCH_FEATURED_PRODUCT}`,
  async () => {
    const response = service.fetchFeaturedProducts();
    return response as IProduct[];
  }
);

export const fetchCarouselItems = createAsyncThunk<ICarouselItem[], null>(
  `${PRODUCTS_SLICE}/${FETCH_CAROUSEL_ITEM}`,
  async () => {
    const response = service.fetchCarouselItems();
    return response as ICarouselItem[];
  }
);

export const productsSlice = createSlice({
  name: PRODUCTS_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
    builder.addCase(fetchCarouselItems.fulfilled, (state, action) => {
      state.carouselItems = action.payload;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productsSlice.reducer;
