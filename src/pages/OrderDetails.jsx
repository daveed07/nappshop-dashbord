import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailItem from "@components/OrderDetailItem";
import StyledOrderDetails from "@styles/styledOrderDetails";
import useGetOrders from "@hooks/useGetOrders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API = "https://nappshop-backend.herokuapp.com/api/v1/orders/";

const OrderDetails = () => {
  const { id } = useParams();

  const { orders, loading, error } = useGetOrders(`${API}${id}`);

  console.log(orders);

  return (
    <StyledOrderDetails>
      <h1 className="title">Order Details</h1>
      <div className="main-container">
        <div className="first-row">
          <div className="first-row-left">
            <h2>Items from order</h2>
            <div className="items">
              <table className="items-table">
                <thead>
                  <tr>
                    <th className="item">Item</th>
                    <th className="quantity">Quantity</th>
                    <th className="price">Price</th>
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
            <h2>Order Summary</h2>
            <div className="order-summary">
              <table className="summary-table">
                <thead>
                  <tr>
                    <th className="description">Description</th>
                    <th className="price">Price</th>
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
                    <td className="description">Shipping</td>
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
                      <td className="description">Discount</td>
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
            <h2>Shipping information</h2>
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
            <h2>Payment information</h2>
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
                Payment status:{" "}
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  orders.payment_status && orders.payment_status
                )}
              </p>
            </div>
          </div>
          <div className="second-row-right">
            <h2>Delivery Info</h2>
            <div className="delivery-info">
              <p className="delivery-name">Delivery RedServi</p>
              <p>
                Delivery status:{" "}
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  orders.order_status && orders.order_status
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledOrderDetails>
  );
};

export default OrderDetails;
