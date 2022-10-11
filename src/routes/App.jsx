import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "@components/micro-components/SideBar";
import Home from "@pages/Home";
import Products from "@pages/Products";
import Orders from "@pages/Orders";
import CreateProduct from "@pages/CreateProduct";
import EditProduct from "@pages/EditProduct";
import OrderDetails from "@pages/OrderDetails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
          <Route path="orders/:id" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
