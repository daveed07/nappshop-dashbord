import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledOrdersContainer from "@styles/styledOrdersContainer";
import OrderItem from "@components/OrderItem";
import Modal from "@components/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalFunction, setModalFunction] = useState(() => {});

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

  // create function called handleDelete that deletes all selected orders from the database
  const handleDeleteOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .delete(`${API}/${order.id}`)
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handlePaidOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          payment_status: "pagado",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleUnpaidOrders = (orders) => {
    orders.forEach((order) => {
      console.log(order);
      axios
        .put(`${API}/${order.id}`, {
          payment_status: "pendiente",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handlePendingOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          order_status: "pendiente",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  const handleProcessingOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          order_status: "procesando",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  const handleShippedOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          order_status: "enviado",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  const handleDeliveredOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          order_status: "entregado",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  const handleCancelledOrders = (orders) => {
    orders.forEach((order) => {
      axios
        .put(`${API}/${order.id}`, {
          order_status: "cancelado",
        })
        .then((response) => {
          window.location.reload();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  const handleBulkAction = () => {
    const selectedOrders = document.querySelectorAll(".check input:checked");

    if (selectedOrders.length > 0) {
      const bulkAction = document.querySelector("#bulk-actions").value;
      switch (bulkAction) {
        case "delete":
          setShowModal(true);
          setModalTitle("Eliminar ordenes");
          setModalMessage(
            `¿Estás seguro que quieres eliminar ${selectedOrders.length} ordenes?`
          );
          setModalFunction(() => {
            return () => {
              handleDeleteOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-paid":
          setShowModal(true);
          setModalTitle("Marcar ordenes como pagadas");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como pagadas?`
          );
          setModalFunction(() => {
            return () => {
              handlePaidOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-unpaid":
          setShowModal(true);
          setModalTitle("Marcar ordenes como no pagadas");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como no pagadas?`
          );
          setModalFunction(() => {
            return () => {
              handleUnpaidOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-pending":
          setShowModal(true);
          setModalTitle("Marcar ordenes como pendientes");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como pendientes?`
          );
          setModalFunction(() => {
            return () => {
              handlePendingOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-processing":
          setShowModal(true);
          setModalTitle("Marcar ordenes como procesando");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como procesando?`
          );
          setModalFunction(() => {
            return () => {
              handleProcessingOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-shipped":
          setShowModal(true);
          setModalTitle("Marcar ordenes como enviadas");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como enviadas?`
          );
          setModalFunction(() => {
            return () => {
              handleShippedOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-delivered":
          setShowModal(true);
          setModalTitle("Marcar ordenes como entregadas");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como entregadas?`
          );
          setModalFunction(() => {
            return () => {
              handleDeliveredOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        case "mark-as-cancelled":
          setShowModal(true);
          setModalTitle("Marcar ordenes como canceladas");
          setModalMessage(
            `¿Estás seguro que quieres marcar ${selectedOrders.length} ordenes como canceladas?`
          );
          setModalFunction(() => {
            return () => {
              handleCancelledOrders(selectedOrders);
              setShowModal(false);
            };
          });
          break;
        default:
          break;
      }
    } else if (selectedOrders.length === 0) {
      setShowModal(true);
      setModalTitle("No hay ordenes seleccionadas");
      setModalMessage("Por favor selecciona al menos una orden");
      setModalFunction(() => {
        return () => {
          setShowModal(false);
        };
      });
    }
  };

  return (
    <StyledOrdersContainer>
      {error && <p>{error.message}</p>}
      <div className="header">
        <div className="bulk-actions">
          <select name="bulk-actions" id="bulk-actions">
            <option value="bulk-actions">Acciones en masa</option>
            <option value="delete">Eliminar</option>
            <option value="mark-as-paid">Pagado</option>
            <option value="mark-as-unpaid">No pagado</option>
            <option value="mark-as-pending">Envío pendiente</option>
            <option value="mark-as-processing">Envío en proceso</option>
            <option value="mark-as-shipped">Enviado</option>
            <option value="mark-as-delivered">Entregado</option>
            <option value="mark-as-cancelled">Cancelado</option>
          </select>
          <button type="button" id="apply" onClick={() => handleBulkAction()}>
            Aplicar
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            placeholder="Buscar ordenes"
            onChange={handleSearchOrder}
          />
          <button
            type="button"
            id="search-button"
            onClick={() => {
              handleSearchOrder();
            }}
          >
            Buscar
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
                <p>ID de orden</p>
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
                <p>
                  Cliente <span>(Nombre)</span>
                </p>
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
                <p>
                  Fecha <span>(AAAA/MM/DD)</span>
                </p>
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
                <p>Estado de pago</p>
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
                <p>Método de pago</p>
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
                <p>Estado de la orden</p>
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
                <p>Acciones</p>
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
              Mostrando ordenes de {indexOfFirstOrder + 1} a {indexOfLastOrder}{" "}
              de {searchOrders.length}
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
      {showModal && (
        <Modal
          title={modalTitle}
          message={modalMessage}
          modalFunction={modalFunction}
          setShowModal={setShowModal}
        />
      )}
    </StyledOrdersContainer>
  );
};

export default OrdersContainer;
