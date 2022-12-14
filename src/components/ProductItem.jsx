import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StyledProductItem from "@styles/styledProductItem";
import Modal from "./Modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Edit from "./svg-components/Edit";
import Trash from "./svg-components/Trash";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products";

const ProductItem = ({ product, loading }) => {
  const [loadImage, setLoadImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (product.images[0]) {
      setLoadImage(true);
    }
  }, [loadImage]);

  const handleDelete = () => {
    setShowModal(false);
    axios
      .delete(`${API}/${product.id}`)
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        window.location.reload();
      });
  };

  return (
    <StyledProductItem>
      <td className="check">
        {loading ? (
          <Skeleton width={20} height={20} />
        ) : (
          <input type="checkbox" id={product.id} />
        )}
      </td>
      <td className="product-name-image">
        <div className="image">
          {!loadImage ? (
            <Skeleton width={48} height={48} />
          ) : (
            <img
              src={
                product.images[
                  product.images.findIndex((item) => item.includes("1.jpg"))
                ]
              }
              alt={product.name}
            />
          )}
        </div>
        <div className="product-name">
          {loading ? <Skeleton width={200} /> : <p>{product.name}</p>}
        </div>
      </td>
      <td className="product-brand">
        {loading ? <Skeleton width={100} /> : <p>{product.brand}</p>}
      </td>
      <td className="category">
        {loading ? <Skeleton width={100} /> : <p>{product.category}</p>}
      </td>
      <td className="type">
        {loading ? <Skeleton width={100} /> : <p>{product.type}</p>}
      </td>
      <td className="sku">
        {loading ? <Skeleton width={100} /> : <p>{product.sku}</p>}
      </td>
      <td className="barcode">
        {loading ? <Skeleton width={100} /> : <p>{product.barcode}</p>}
      </td>
      <td className="added-date">
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <p>
            {new Date(product.created_date).toLocaleDateString("pa-PA", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        )}
      </td>
      <td className="price">
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
        )}
      </td>
      <td className="stock">
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <p>
            {product.stock.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        )}
      </td>
      <td className="actions">
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <div className="action-buttons">
            <Link to={`/edit-product/${product.id}`}>
              <button className="edit">
                <Edit />
              </button>
            </Link>
            <button
              className="delete"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Trash />
            </button>
          </div>
        )}
      </td>
      {showModal && (
        <Modal
          title="Eliminar producto"
          message="??Est??s seguro que deseas eliminar este producto?"
          setShowModal={setShowModal}
          handleDelete={handleDelete}
        />
      )}
    </StyledProductItem>
  );
};

export default ProductItem;
