import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useGetProducts from "@hooks/useGetProducts";
import CreateProductContent from "@containers/CreateProductContent";
import PreviewProduct from "@containers/PreviewProduct";
import StyledCreateProduct from "@styles/styledCreateProduct";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products/";

const EditProduct = () => {
  const { id } = useParams();
  const { products, loading, error } = useGetProducts(`${API}${id}`);
  const [prod, setProd] = useState({
    name: "",
    description: "",
    category: "",
    type: "",
    images: [],
    price: "",
    stock: "",
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    // check if products object is not empty
    if (Object.keys(products).length !== 0) {
      setProd(products);
    }
  }, [products]);

  const submitProduct = async (e) => {
    const newProduct = {
      name: prod.name,
      description: prod.description,
      type: prod.type,
      brand_id: prod.brand,
      category_id: prod.category,
      price: parseFloat(prod.price),
      compare_at_price: parseFloat(prod.compare_at_price),
      sku: prod.sku,
      barcode: prod.barcode,
      stock: parseInt(prod.stock),
    };

    console.log(newProduct);
    if (
      newProduct.name &&
      newProduct.description &&
      newProduct.type &&
      newProduct.brand_id &&
      newProduct.category_id &&
      newProduct.price &&
      newProduct.compare_at_price &&
      newProduct.sku &&
      newProduct.barcode &&
      newProduct.stock
    ) {
      try {
        const response = await axios.put(`${API}/${id}`, newProduct);
        alert("Product updated successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <StyledCreateProduct>
      <h1 className="title">Create Product</h1>
      <div className="main-container">
        <CreateProductContent
          product={prod}
          setProduct={setProd}
          input={input}
          setInput={setInput}
          submitProduct={submitProduct}
        />
        <div className="preview-container">
          <PreviewProduct
            product={prod}
            setProduct={setProd}
            loading={loading}
          />
        </div>
      </div>
    </StyledCreateProduct>
  );
};

export default EditProduct;
