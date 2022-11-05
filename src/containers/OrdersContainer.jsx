import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledOrdersContainer from "@styles/styledOrdersContainer";
import OrderItem from "@components/OrderItem";
import LeftArrow from "@components/svg-components/LeftArrow";
import RightArrow from "@components/svg-components/RightArrow";
import SortUp from "@components/svg-components/SortUp";
import SortDown from "@components/svg-components/SortDown";
import {
  sortOrdersById,
  sortOrdersByName,
  sortOrdersByDate,
  sortOrdersByTotal,
  sortOrdersByStatus,
  sortOrdersByPaymentMethod,
  sortOrdersByPaymentStatus,
} from "@utils/order.sorters";

const API = "https://nappshop-backend.herokuapp.com/api/v1/orders";

const OrdersContainer = ({ orders, loading, error }) => {
  const [sortId, setSortId] = useState("asc");
  const [sortName, setSortName] = useState("asc");
  const [sortDate, setSortDate] = useState("asc");
  const [sortTotal, setSortTotal] = useState("asc");
  const [sortStatus, setSortStatus] = useState("asc");
  const [sortPaymentMethod, setSortPaymentMethod] = useState("asc");
  const [sortPaymentStatus, setSortPaymentStatus] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);
  const [searchOrders, setSearchOrders] = useState(orders);

  useEffect(() => {
    setSearchOrders(orders);

    if (sortId === "desc") {
      sortOrdersById(orders, "asc");
    }
    if (sortId === "asc") {
      sortOrdersById(orders, "desc");
    }
  }, [orders]);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = searchOrders.slice(indexOfFirstOrder, indexOfLastOrder);

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
        });
    });

    alert("Orders deleted successfully");
    window.location.reload();
  };

  const handleSearchOrder = () => {
    // search for orders that match the search query and update the searchOrders state
    const searchQuery = document.querySelector(".search input").value;
    const searchResults = orders.filter((order) => {
      return (
        order.order_id === Number(searchQuery) ||
        order.contact.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setSearchOrders(searchResults);
  };

  return (
    <StyledOrdersContainer>
      {error && <p>{error.message}</p>}
      <div className="header">
        <div className="bulk-actions">
          <select name="bulk-actions" id="bulk-actions">
            <option value="bulk-actions">Bulk Actions</option>
            <option value="delete">Delete</option>
          </select>
          <button
            type="button"
            id="apply"
            onClick={() => {
              if (document.querySelector("#bulk-actions").value === "delete") {
                handleDelete();
              }
            }}
          >
            Apply
          </button>
        </div>
        <div className="search">
          <input type="text" id="search" placeholder="Search orders" />
          <button
            type="button"
            id="search-button"
            onClick={() => {
              handleSearchOrder();
            }}
          >
            Search
          </button>
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
                <div className="sort">
                  {sortId === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersById(orders, sortId);
                        setSortId("desc");
                      }}
                    />
                  )}
                  {sortId === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersById(orders, sortId);
                        setSortId("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="customer">
              <div className="header-wrapper">
                <p>Customer</p>
                <div className="sort">
                  {sortName === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByName(orders, sortName);
                        setSortName("desc");
                      }}
                    />
                  )}
                  {sortName === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByName(orders, sortName);
                        setSortName("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="date">
              <div className="header-wrapper">
                <p>Date</p>
                <div className="sort">
                  {sortDate === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByDate(orders, sortDate);
                        setSortDate("desc");
                      }}
                    />
                  )}
                  {sortDate === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByDate(orders, sortDate);
                        setSortDate("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="payment-status">
              <div className="header-wrapper">
                <p>Payment Status</p>
                <div className="sort">
                  {sortPaymentStatus === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByPaymentStatus(orders, sortPaymentStatus);
                        setSortPaymentStatus("desc");
                      }}
                    />
                  )}
                  {sortPaymentStatus === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByPaymentStatus(orders, sortPaymentStatus);
                        setSortPaymentStatus("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="total">
              <div className="header-wrapper">
                <p>Total</p>
                <div className="sort">
                  {sortTotal === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByTotal(orders, sortTotal);
                        setSortTotal("desc");
                      }}
                    />
                  )}
                  {sortTotal === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByTotal(orders, sortTotal);
                        setSortTotal("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="payment-method">
              <div className="header-wrapper">
                <p>Payment Method</p>
                <div className="sort">
                  {sortPaymentMethod === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByPaymentMethod(orders, sortPaymentMethod);
                        setSortPaymentMethod("desc");
                      }}
                    />
                  )}
                  {sortPaymentMethod === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByPaymentMethod(orders, sortPaymentMethod);
                        setSortPaymentMethod("asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="order-status">
              <div className="header-wrapper">
                <p>Order Status</p>
                <div className="sort">
                  {sortStatus === "asc" && (
                    <SortUp
                      onClick={() => {
                        sortOrdersByStatus(orders, sortStatus);
                        setSortStatus("desc");
                      }}
                    />
                  )}
                  {sortStatus === "desc" && (
                    <SortDown
                      onClick={() => {
                        sortOrdersByStatus(orders, sortStatus);
                        setSortStatus("asc");
                      }}
                    />
                  )}
                </div>
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
                  {[...Array(9)].map((i) => (
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
              {searchOrders.length}
            </p>
          )}
        </div>
        <div className="pagination-buttons">
          <button
            className="prev"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <LeftArrow />
          </button>
          <button
            className="next"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastOrder >= searchOrders.length}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </StyledOrdersContainer>
  );
};

export default OrdersContainer;
