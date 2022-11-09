import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDetailItem from "@components/OrderDetailItem";
import StyledOrderDetails from "@styles/styledOrderDetails";
import useGetOrders from "@hooks/useGetOrders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Edit from "@components/svg-components/Edit";

const API = "https://nappshop-backend.herokuapp.com/api/v1/orders/";

const OrderDetails = () => {
  const { id } = useParams();

  const { orders, loading, error } = useGetOrders(`${API}${id}`);

  const [pmtToggle, setPmtToggle] = useState(false);
  const [shipToggle, setShipToggle] = useState(false);

  const handleEdit = () => {
    const paymentStatus =
      document.getElementById("payment_status") === null
        ? orders.payment_status
        : document.getElementById("payment_status").value;
    const orderStatus =
      document.getElementById("order_status") === null
        ? orders.order_status
        : document.getElementById("order_status").value;

    console.log(orders.payment_status);
    console.log(orders.order_status);

    setPmtToggle(!pmtToggle);
    setShipToggle(!shipToggle);

    axios
      .put(`${API}${id}`, {
        payment_status: paymentStatus,
        order_status: orderStatus,
      })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert("Order updated successfully");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status === 400) {
          alert("Error updating order");
        }
      });
  };

  return (
    <StyledOrderDetails>
      <h1 className="title">
        Detalles de la orden <span>#{id}</span>
      </h1>
      <div className="main-container">
        <div className="first-row">
          <div className="first-row-left">
            <h2>Artículos de la orden</h2>
            <div className="items">
              <table className="items-table">
                <thead>
                  <tr>
                    <th className="item">Artículo</th>
                    <th className="quantity">Cantidad</th>
                    <th className="price">Precio</th>
                    <th className="total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td className="item">
                        <Skeleton width={320} />
                      </td>
                      <td className="quantity">
                        <Skeleton width={100} />
                      </td>
                      <td className="price">
                        <Skeleton width={100} />
                      </td>
                      <td className="total">
                        <Skeleton width={100} />
                      </td>
                    </tr>
                  ) : orders ? (
                    orders.order_items ? (
                      orders.order_items.map((item) => (
                        <OrderDetailItem
                          key={item.id}
                          item={item}
                          loading={loading}
                        />
                      ))
                    ) : (
                      <tr>
                        <td className="item">
                          <Skeleton width={320} />
                        </td>
                        <td className="quantity">
                          <Skeleton width={100} />
                        </td>
                        <td className="price">
                          <Skeleton width={100} />
                        </td>
                        <td className="total">
                          <Skeleton width={100} />
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td className="item">
                        <Skeleton width={320} />
                      </td>
                      <td className="quantity">
                        <Skeleton width={100} />
                      </td>
                      <td className="price">
                        <Skeleton width={100} />
                      </td>
                      <td className="total">
                        <Skeleton />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="first-row-right">
            <h2>Resumen de la orden</h2>
            <div className="order-summary">
              <table className="summary-table">
                <thead>
                  <tr>
                    <th className="description">Descripción</th>
                    <th className="price">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="description">Subtotal</td>
                    <td className="price">
                      {loading ? (
                        <Skeleton width={100} />
                      ) : (
                        orders.subtotal &&
                        orders.subtotal.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="description">Envío</td>
                    <td className="price">
                      {loading ? (
                        <Skeleton width={100} />
                      ) : (
                        orders.shipping &&
                        orders.shipping.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      )}
                    </td>
                  </tr>
                  {orders.discount !== 0 && (
                    <tr>
                      <td className="description">Descuento</td>
                      <td className="price">
                        {loading ? (
                          <Skeleton
                            style={{ width: "100px", height: "20px" }}
                          />
                        ) : (
                          orders.discount &&
                          orders.discount.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                        )}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="description total">Total</td>
                    <td className="price total">
                      {loading ? (
                        <Skeleton width={100} />
                      ) : (
                        orders.total &&
                        orders.total.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="second-row-left">
            <h2>Información de envío</h2>
            <div className="shipping-info">
              <p>
                {loading ? (
                  <Skeleton width={200} />
                ) : (
                  orders.contact && orders.contact.name
                )}
              </p>
              {loading ? (
                Array(3).fill(<Skeleton width={250} />)
              ) : typeof orders.shipping_address === "string" ? (
                orders.shipping_address
              ) : (
                <>
                  <p>
                    {orders.shipping_address &&
                      orders.shipping_address.address1}
                  </p>
                  <p>
                    {orders.shipping_address &&
                      orders.shipping_address.address2}
                  </p>
                  <p>
                    {orders.shipping_address && orders.shipping_address.city}
                  </p>
                  <p>
                    {orders.shipping_address &&
                      orders.shipping_address.province}
                  </p>
                </>
              )}
              <p>
                Phone:{" "}
                {loading ? (
                  <Skeleton width={200} />
                ) : (
                  orders.contact && orders.contact.phone
                )}
              </p>
            </div>
          </div>
          <div className="second-row-middle">
            <div className="payment-info-header">
              <h2>Información de pago</h2>
              <button
                className="edit-btn"
                onClick={() => {
                  setPmtToggle(!pmtToggle);
                }}
              >
                <Edit />
              </button>
            </div>
            <div className="payment-info">
              <p>
                Payment Method:{" "}
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  orders.payment_method && orders.payment_method
                )}
              </p>
              <p>
                Estado del pago:{" "}
                {loading ? (
                  <Skeleton width={100} />
                ) : pmtToggle ? (
                  <select
                    name="payment_status"
                    id="payment_status"
                    defaultValue={orders.payment_status}
                  >
                    <option value="paid">Pagado</option>
                    <option value="pending">Pendiente</option>
                  </select>
                ) : (
                  // show payment status in title case
                  orders.payment_status &&
                  orders.payment_status.charAt(0).toUpperCase() +
                    orders.payment_status.slice(1)
                )}
              </p>
            </div>
          </div>
          <div className="second-row-right">
            <div className="delivery-info-header">
              <h2>Información de entrega</h2>
              <button
                className="edit-btn"
                onClick={() => {
                  setShipToggle(!shipToggle);
                }}
              >
                <Edit />
              </button>
            </div>
            <div className="delivery-info">
              <p className="delivery-name">Delivery RedServi</p>
              <p>
                Estado del envío:{" "}
                {loading ? (
                  <Skeleton width={100} />
                ) : shipToggle ? (
                  <select
                    name="order_status"
                    id="order_status"
                    defaultValue={orders.order_status}
                  >
                    <option value="pending">Pendiente</option>
                    <option value="processing">Procesando</option>
                    <option value="shipped">Enviado</option>
                    <option value="delivered">Entregado</option>
                    <option value="cancelled">Cancelado</option>
                  </select>
                ) : (
                  // show order status in title case
                  orders.order_status &&
                  orders.order_status.charAt(0).toUpperCase() +
                    orders.order_status.slice(1)
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-row">
        <div className="button-container">
          <button
            className="cancel-btn"
            onClick={() => (window.location.href = "/orders")}
          >
            Cancelar
          </button>
          <button
            className="save-btn"
            onClick={() => {
              handleEdit();
            }}
            disabled={pmtToggle || shipToggle ? false : true}
          >
            Guardar
          </button>
        </div>
      </div>
    </StyledOrderDetails>
  );
};

export default OrderDetails;
