import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductItem from "@components/ProductItem";
import StyledProductsContainer from "@styles/styledProductsContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "@components/Modal";
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
  sortProductsBySKU,
  sortProductsByBarcode,
  sortProductsByDate,
  sortProductsByStock,
  sortProductsByPrice,
} from "@utils/product.sorters";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products";

const ProductsContainer = ({ products, loading, error }) => {
  const [sortName, setSortName] = useState("asc");
  const [sortBrand, setSortBrand] = useState("asc");
  const [sortCategory, setSortCategory] = useState("asc");
  const [sortType, setSortType] = useState("asc");
  const [sortSKU, setSortSKU] = useState("asc");
  const [sortBarcode, setSortBarcode] = useState("asc");
  const [sortDate, setSortDate] = useState("asc");
  const [sortStock, setSortStock] = useState("asc");
  const [sortPrice, setSortPrice] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchProducts, setSearchProducts] = useState(products);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalFunction, setModalFunction] = useState(() => {});

  useEffect(() => {
    setSearchProducts(products);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchProduct = () => {
    // search for products that match the search query and update the searchProducts state
    const searchQuery = document.querySelector(".search input").value;
    const searchResults = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.barcode.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setSearchProducts(searchResults);
  };

  const handleDeleteProducts = (products) => {
    products.forEach((product) => {
      axios
        .delete(`${API}/${product.id}`)
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleBulkAction = () => {
    const selectedProducts = document.querySelectorAll(".check input:checked");

    if (selectedProducts.length > 0) {
      const bulkAction = document.querySelector("#bulk-actions").value;
      switch (bulkAction) {
        case "delete":
          setShowModal(true);
          setModalTitle("Eliminar productos");
          setModalMessage(
            `¿Estás seguro que deseas eliminar ${selectedProducts.length} productos?`
          );
          setModalFunction(() => {
            return () => {
              handleDeleteProducts(selectedProducts);
              setShowModal(false);
            };
          });
          break;
        default:
          break;
      }
    } else if (selectedProducts.length === 0) {
      setShowModal(true);
      setModalTitle("No hay productos seleccionados");
      setModalMessage("Por favor selecciona al menos un producto.");
      setModalFunction(() => {
        return () => {
          setShowModal(false);
        };
      });
    }
  };

  return (
    <StyledProductsContainer>
      {error && <p>{error.message}</p>}
      <div className="header">
        <div className="header-left">
          <div className="create-product">
            <Link to="/create-product">
              <button>
                <Add />
                <span>Crear producto</span>
              </button>
            </Link>
          </div>
          <div className="bulk-actions">
            <select name="bulk-actions" id="bulk-actions">
              <option value="bulk-actions">Acciones en masa</option>
              <option value="delete">Eliminar</option>
            </select>
            <button type="button" id="apply" onClick={() => handleBulkAction()}>
              Aplicar
            </button>
          </div>
        </div>
        <div className="header-right">
          <div className="search">
            <input
              type="text"
              id="search"
              placeholder="Buscar productos"
              onChange={handleSearchProduct}
            />
            <button
              type="button"
              id="search-button"
              onClick={handleSearchProduct}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="check">
              <input
                type="checkbox"
                onChange={(e) => {
                  const checkboxes = document.querySelectorAll(
                    ".table tbody input[type='checkbox']"
                  );
                  checkboxes.forEach((checkbox) => {
                    checkbox.checked = e.target.checked;
                  });
                }}
              />
            </th>
            <th className="product-name">
              <div className="header-wrapper">
                <p>Nombre del producto</p>
                <div className="sort">
                  {sortName === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByName(products, sortName);
                        setSortName("desc");
                      }}
                    />
                  )}
                  {sortName === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByName(products, sortName);
                        setSortName("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="brand">
              <div className="header-wrapper">
                <p>Marca</p>
                <div className="sort">
                  {sortBrand === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByBrand(products, sortBrand);
                        setSortBrand("desc");
                      }}
                    />
                  )}
                  {sortBrand === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByBrand(products, sortBrand);
                        setSortBrand("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="category">
              <div className="header-wrapper">
                <p>Categoría</p>
                <div className="sort">
                  {sortCategory === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByCategory(products, sortCategory);
                        setSortCategory("desc");
                      }}
                    />
                  )}
                  {sortCategory === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByCategory(products, sortCategory);
                        setSortCategory("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="type">
              <div className="header-wrapper">
                <p>Tipo</p>
                <div className="sort">
                  {sortType === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByType(products, sortType);
                        setSortType("desc");
                      }}
                    />
                  )}
                  {sortType === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByType(products, sortType);
                        setSortType("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="sku">
              <div className="header-wrapper">
                <p>SKU</p>
              </div>
              {sortSKU === "asc" && (
                <SortUp
                  onClick={() => {
                    sortProductsBySKU(products, sortSKU);
                    setSortSKU("desc");
                  }}
                />
              )}
              {sortSKU === "desc" && (
                <SortDown
                  onClick={() => {
                    sortProductsBySKU(products, sortSKU);
                    setSortSKU("asc");
                  }}
                />
              )}
            </th>
            <th className="barcode">
              <div className="header-wrapper">
                <p>Código de barra</p>
                <div className="sort">
                  {sortBarcode === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByBarcode(products, sortBarcode);
                        setSortBarcode("desc");
                      }}
                    />
                  )}
                  {sortBarcode === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByBarcode(products, sortBarcode);
                        setSortBarcode("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="date">
              <div className="header-wrapper">
                <p>Fecha de creación</p>
                <div className="sort">
                  {sortDate === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByDate(products, sortDate);
                        setSortDate("desc");
                      }}
                    />
                  )}
                  {sortDate === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByDate(products, sortDate);
                        setSortDate("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="price">
              <div className="header-wrapper">
                <p>Precio</p>
                <div className="sort">
                  {sortPrice === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByPrice(products, sortPrice);
                        setSortPrice("desc");
                      }}
                    />
                  )}
                  {sortPrice === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByPrice(products, sortPrice);
                        setSortPrice("asc");
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
                  {sortStock === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortProductsByStock(products, sortStock);
                        setSortStock("desc");
                      }}
                    />
                  )}
                  {sortStock === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortProductsByStock(products, sortStock);
                        setSortStock("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th>
              <div className="header-wrapper">
                <p>Acciones</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(5)].map((index) => (
                <tr key={index}>
                  {[...Array(8)].map((i) => (
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
            <p>
              Mostrando productos del {indexOfFirstProduct + 1} al {indexOfLastProduct}{" "}
              de {products.length}
            </p>
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
      {showModal && (
        <Modal
          title={modalTitle}
          message={modalMessage}
          modalFunction={modalFunction}
          setShowModal={setShowModal}
        />
      )}
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
