import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledOrderItem from "@styles/styledOrderItem";
import Modal from "@components/Modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Eye from "./svg-components/Eye";
import Trash from "./svg-components/Trash";

const API = "https://nappshop-backend.herokuapp.com/api/v1";

const OrderItem = ({ order, loading }) => {
  // get customerName
  const [customerName, setCustomerName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/users/${order.user_id}`)
      .then((response) => {
        setCustomerName(response.data.full_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${API}/orders/${order.order_id}`)
      .then((response) => {
        alert("Order deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        alert("Error deleting order");
        window.location.reload();
      });
  };

  return (
    <StyledOrderItem>
      <td className="check">
        <input type="checkbox" id={order.order_id} />
      </td>
      <td className="order-id">
        {loading ? <Skeleton width="100%" /> : <p>{order.order_id}</p>}
      </td>
      <td className="customer">
        {loading ? <Skeleton width="100%" /> : <p>{customerName}</p>}
      </td>
      <td className="order-date">
        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <p>
            {new Date(order.created_date).toLocaleDateString("pa-PA", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        )}
      </td>
      <td className="payment-status">
        {loading ? <Skeleton width="100%" /> : <p>{order.payment_status}</p>}
      </td>
      <td className="order-total">
        {loading ? <Skeleton width="100%" /> : <p>{order.total}</p>}
      </td>
      <td className="payment-method">
        {loading ? <Skeleton width="100%" /> : <p>{order.payment_method}</p>}
      </td>
      <td className="order-status">
        {loading ? <Skeleton width="100%" /> : <p>{order.order_status}</p>}
      </td>
      <td className="actions">
        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <div className="action-buttons">
            <Link to={`/orders/${order.order_id}`}>
              <button className="edit">
                <Eye />
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
          title="Order Product"
          message="Are you sure you want to delete this order?"
          handleDelete={handleDelete}
          setShowModal={setShowModal}
        />
      )}
    </StyledOrderItem>
  );
};

export default OrderItem;
