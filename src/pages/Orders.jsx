import React from "react";
import OrdersContainer from "@containers/OrdersContainer";
import useGetOrders from "@hooks/useGetOrders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledOrders from "@styles/styledOrders";

const API = "https://nappshop-backend.herokuapp.com/api/v1/orders";

const Orders = () => {
  const { orders, loading, error } = useGetOrders(API);

  return (
    <StyledOrders>
      <h1 className="title">{loading ? <Skeleton /> : "Orders"}</h1>
      <OrdersContainer orders={orders} loading={loading} error={error} />
    </StyledOrders>
  );
};

export default Orders;
