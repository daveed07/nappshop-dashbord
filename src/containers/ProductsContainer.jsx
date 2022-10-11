import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "@components/ProductItem";
import StyledProductsContainer from "@styles/styledProductsContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SortUp from "@components/svg-components/SortUp";
import SortDown from "@components/svg-components/SortDown";
import RightArrow from "@components/svg-components/RightArrow";
import LeftArrow from "@components/svg-components/LeftArrow";
import Add from "@components/svg-components/Add";
import {
  sortProductsByName,
  sortProductsByBrand,
  sortProductsByCategory,
  sortProductsByType,
  sortProductsByDate,
  sortProductsByStock,
  sortProductsByPrice,
} from "@utils/product.sorters";

const ProductsContainer = ({ products, loading, error }) => {
  const [sort, setSort] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StyledProductsContainer>
      {error && <p>{error.message}</p>}
      <div className="create-product">
        <Link to="/create-product">
          <button>
            <Add />
            <span>Create Product</span>
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="product-name">
              <div className="header-wrapper">
                <p>Product</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByName(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByName(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="brand">
              <div className="header-wrapper">
                <p>Brand</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByBrand(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByBrand(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="category">
              <div className="header-wrapper">
                <p>Category</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByCategory(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByCategory(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="type">
              <div className="header-wrapper">
                <p>Type</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByType(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByType(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="date">
              <div className="header-wrapper">
                <p>Added Date</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByDate(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByDate(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="price">
              <div className="header-wrapper">
                <p>Price</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByPrice(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByPrice(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="stock">
              <div className="header-wrapper">
                <p>Stock</p>
                <div className="sort">
                  {sort === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByStock(products, sort);
                        setSort("desc");
                      }}
                    />
                  )}
                  {sort === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByStock(products, sort);
                        setSort("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th>
              <div className="header-wrapper">
                <p>Actions</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(5)].map((index) => (
                <tr key={index}>
                  {[...Array(7)].map((i) => (
                    <td key={i} style={{ padding: "20px" }}>
                      <Skeleton width="100%" />
                    </td>
                  ))}
                </tr>
              ))
            : currentProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  loading={loading}
                />
              ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination-count">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <p>Showing products {indexOfFirstProduct + 1} to {indexOfLastProduct} of {products.length}</p>
          )}
        </div>
        <div className="pagination-buttons">
          <button
            className="prev"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
          >
            <LeftArrow />
          </button>
          <button
            className="next"
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(products.length / productsPerPage)
                ? true
                : false
            }
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
