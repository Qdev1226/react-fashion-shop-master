import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { fetchProductsByCategory } from "../../store/slices/productsSlice";

import { CategoryFilter } from "../../components/CategoryFilter/CategoryFilter";
import { CategorySorting } from "../../components/CategorySorting/CategorySorting";
import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Category.less";

export const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [filterBy, setFilter] = useState<string>("");
  const [sortBy, setSorter] = useState<string>("");

  const productList = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const param = {
      category,
      filterBy,
      sortBy,
    };

    dispatch(fetchProductsByCategory(param));
  }, [category, filterBy, sortBy, dispatch]);

  return (
    <section className="category">
      <PageHeading type="section" title="Category Page" menu={[category]} />
      <Container className="category__controls">
        <CategoryFilter setFilter={setFilter} />
        <CategorySorting setSorter={setSorter} />
      </Container>

      <Container>
        <ProductList productList={productList} />
      </Container>
    </section>
  );
};
