import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateProductContent from "@containers/CreateProductContent";
import PreviewProduct from "@containers/PreviewProduct";
import StyledCreateProduct from "@styles/styledCreateProduct";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products";

const CreateProduct = () => {
  const [input, setInput] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    compare_at_price: "",
    stock: 0,
    brand: "",
    type: "",
    category: "",
    brand: "",
    sku: "",
    barcode: "",
    images: [],
  });

  const submitProduct = async (e) => {
    const newProduct = {
      name: product.name,
      description: product.description,
      type: product.type,
      brand_id: product.brand,
      category_id: product.category,
      price: parseFloat(product.price),
      compare_at_price: parseFloat(product.compare_at_price),
      sku: product.sku,
      barcode: product.barcode,
      stock: parseInt(product.stock),
      images: product.images,
    };
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
      newProduct.stock &&
      newProduct.images.length > 0
    ) {
      try {
        const response = await axios.post(API, newProduct);
        alert("Product created successfully");
        setProduct({
          name: "",
          description: "",
          price: "",
          compare_at_price: "",
          stock: 0,
          brand: "",
          type: "",
          category: "",
          sku: "",
          barcode: "",
          images: [],
        });
      } catch (error) {
        alert("Error creating product");
      }
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <StyledCreateProduct>
      <h1 className="title">Create Product</h1>
      <div className="main-container">
        <CreateProductContent
          product={product}
          setProduct={setProduct}
          input={input}
          setInput={setInput}
          submitProduct={submitProduct}
        />
        <div className="preview-container">
          <PreviewProduct product={product} setProduct={setProduct} />
        </div>
      </div>
    </StyledCreateProduct>
  );
};

export default CreateProduct;
