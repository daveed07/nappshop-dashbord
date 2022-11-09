import React, { useState, useEffect } from "react";
import axios from "axios";
import useGetProducts from "@hooks/useGetProducts";
import CreateProductContent from "@containers/CreateProductContent";
import PreviewProduct from "@containers/PreviewProduct";
import StyledCreateProduct from "@styles/styledCreateProduct";

const API = "https://nappshop-backend.herokuapp.com/api/v1/products";

const CreateProduct = () => {
  const [input, setInput] = useState("");
  const { products, loading, error } = useGetProducts(`${API}`);
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

  // create productType array and push all types into it from products array
  const productType = [];
  products.map((product) => {
    if (!productType.includes(product.type)) {
      productType.push(product.type);
    }
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
      newProduct.type &&
      newProduct.brand_id &&
      newProduct.category_id &&
      newProduct.price &&
      newProduct.sku &&
      newProduct.barcode &&
      newProduct.stock !== null
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
        alert("Error al crear el producto");
      }
    } else {
      alert("Por favor, rellena todos los campos obligatorios");
    }
  };

  return (
    <StyledCreateProduct>
      <h1 className="title">Crear producto</h1>
      <div className="main-container">
        <CreateProductContent
          product={product}
          setProduct={setProduct}
          input={input}
          setInput={setInput}
          submitProduct={submitProduct}
          productType={productType}
        />
        <div className="preview-container">
          <PreviewProduct product={product} setProduct={setProduct} />
        </div>
      </div>
    </StyledCreateProduct>
  );
};

export default CreateProduct;
