import React from "react";
import ProductsContainer from "@containers/ProductsContainer";
import useGetProducts from "@hooks/useGetProducts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledProducts from "@styles/styledProducts";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products";

const Products = () => {
  const { products, loading, error } = useGetProducts(API);

  return (
    <StyledProducts>
      <h1 className="title">{loading ? <Skeleton /> : "Productos"}</h1>
      <ProductsContainer products={products} loading={loading} error={error} />
    </StyledProducts>
  );
};

export default Products;
