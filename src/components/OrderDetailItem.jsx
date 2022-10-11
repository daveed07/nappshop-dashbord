import React from "react";
import StyledOrderDetailItem from "../styles/styledOrderDetailItem";

const OrderDetailItem = ({ item }) => {
  return (
    <StyledOrderDetailItem>
      <td className="item">
        <span>{item.product_name}</span>
      </td>
      <td className="quantity">
        <span>{item.product_quantity}</span>
      </td>
      <td className="price">
        <span>
          {item.product_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </td>
      <td className="total">
        <span>
          {(item.product_price * item.product_quantity).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </td>
    </StyledOrderDetailItem>
  );
};

export default OrderDetailItem;
