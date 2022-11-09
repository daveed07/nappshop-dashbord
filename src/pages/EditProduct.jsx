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
const { products: allProducts } = useGetProducts(`${API}`);
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

  const productType = [];
  allProducts.map((product) => {
    if (!productType.includes(product.type)) {
      productType.push(product.type);
    }
  });

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
      images: prod.images,
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
        const response = await axios.put(`${API}${id}`, newProduct);
        alert("Producto actualizado con éxito");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor, rellena todos los campos obligatorios");
      // print fields that are empty in the console
      for (const [key, value] of Object.entries(newProduct)) {
        if (!value) {
          console.log(key);
        }
      }
    }
  };

  return (
    <StyledCreateProduct>
      <h1 className="title">
        Editar producto
      </h1>
      <div className="main-container">
        <CreateProductContent
          product={prod}
          setProduct={setProd}
          input={input}
          setInput={setInput}
          submitProduct={submitProduct}
          productType={productType}
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
