import React, { useEffect } from "react";
import { Container } from "../../components/Container/Container";
import { HomeCarousel } from "../../components/HomeCarousel/HomeCarousel";
import { HomeCollections } from "../../components/HomeCollections/HomeCollections";
import { HomeFeatures } from "../../components/HomeFeatures/HomeFeatures";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductList } from "../../components/ProductList/ProductList";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  fetchFeaturedProducts,
  fetchCarouselItems,
} from "../../store/slices/productsSlice";

import "./Home.less";

export const Home = () => {
  const productList = useAppSelector((state) => state.products.productList);
  const carouselItems = useAppSelector((state) => state.products.carouselItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProducts(null));
    dispatch(fetchCarouselItems(null));
  }, [dispatch]);

  return (
    <section className="home">
      <HomeCarousel carouselItems={carouselItems} />
      <Container className="home__heading-container">
        <PageHeading
          title="Popular on Fashion Shop"
          menu={["Clothes", "Bag", "Shoe"]}
        />
      </Container>
      <Container>
        <ProductList productList={productList} />
      </Container>
      <Container fluid>
        <HomeCollections />
      </Container>
      <Container>
        <HomeFeatures />
      </Container>
    </section>
  );
};
