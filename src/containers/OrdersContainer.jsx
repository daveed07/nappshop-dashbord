import React, { useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledOrdersContainer from "@styles/styledOrdersContainer";
import OrderItem from "@components/OrderItem";

const API = "https://nappshop-backend.herokuapp.com/api/v1/orders";

const OrdersContainer = ({ orders, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // create function called handleDelete that deletes all selected orders from the database
  const handleDelete = () => {
    const selectedOrders = document.querySelectorAll(".check input:checked");
    selectedOrders.forEach((order) => {
      axios
        .delete(`${API}/${order.id}`)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    alert("Orders deleted successfully");
    window.location.reload();
  }

  return (
    <StyledOrdersContainer>
      {error && <p>{error.message}</p>}
      <div className="bulk-actions">
        <div className="bulk-actions__left">
          <select name="bulk-actions" id="bulk-actions">
            <option value="bulk-actions">Bulk Actions</option>
            <option value="delete">Delete</option>
          </select>
          <button onClick={() => {
            if (document.querySelector("#bulk-actions").value === "delete") {
              handleDelete();
            }
          }}>Apply</button>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
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
                    ".table input[type=checkbox]"
                  );
                  checkboxes.forEach((checkbox) => {
                    checkbox.checked = e.target.checked;
                  });
                }}
              />
            </th>
            <th className="order-id">
              <div className="header-wrapper">
                <p>Order ID</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="customer">
              <div className="header-wrapper">
                <p>Customer</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="date">
              <div className="header-wrapper">
                <p>Date</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="payment-status">
              <div className="header-wrapper">
                <p>Payment Status</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="total">
              <div className="header-wrapper">
                <p>Total</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="payment-method">
              <div className="header-wrapper">
                <p>Payment Method</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="order-status">
              <div className="header-wrapper">
                <p>Order Status</p>
                <div className="sort"></div>
              </div>
            </th>
            <th className="actions">
              <div className="header-wrapper">
                <p>Actions</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(5)].map((index) => (
                <tr key={index}>
                  {[...Array(6)].map((i) => (
                    <td key={i} style={{ padding: "20px" }}>
                      <Skeleton width="100%" />
                    </td>
                  ))}
                </tr>
              ))
            : currentOrders.map((order) => (
                <OrderItem key={order.id} order={order} loading={loading} />
              ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination-count">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <p>
              Showing orders {indexOfFirstOrder + 1} to {indexOfLastOrder} of{" "}
              {orders.length}
            </p>
          )}
        </div>
        <div className="pagination-buttons">
          <button
            className="prev"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="next"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastOrder >= orders.length}
          >
            Next
          </button>
        </div>
      </div>
    </StyledOrdersContainer>
  );
};

export default OrdersContainer;
