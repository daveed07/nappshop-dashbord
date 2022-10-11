import React, { useState, useEffect } from "react";
import Image from "@components/micro-components/Image";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Trash from "@components/svg-components/Trash";
import CartFill from "@components/svg-components/CartFill";
import BagFill from "@components/svg-components/BagFill";
import Truck from "@components/svg-components/Truck";
import StyledProduct from "@styles/styledProduct";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const PreviewProduct = ({ product, setProduct, loading }) => {
  const [image, setImage] = useState(null);

  return (
    <StyledProduct>
      <div className="product-container">
        <section className="product-section">
          <div className="product-images">
            <Image
              display
              loading={loading}
              src={image || product.images[0] || assets.product_placeholder}
              alt={product.name}
              id={product.id}
              nohref
            />
            <div className="display-images">
              {product.images.map((i, index) =>
                loading ? (
                  <Skeleton
                    key={index}
                    className="image-skeleton"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div
                    key={index}
                    className="image-container"
                    style={
                      image === i
                        ? {
                            border: `2px solid ${colors.greyDark}`,
                            borderRadius: "8px",
                          }
                        : null
                    }
                  >
                    <Image
                      cart
                      key={index}
                      src={i}
                      loading={loading}
                      alt={product.name}
                      id={product.id}
                      nohref
                      onClick={() => setImage(i)}
                    />
                    <div className="remove-image">
                      <button
                        type="button"
                        onClick={() => {
                          setProduct({
                            ...product,
                            images: product.images.filter((img) => img !== i),
                          });
                          setImage(null);
                        }}
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="product-info">
            <Title size="xxxxlarge" color={colors.black}>
              {loading && <Skeleton width={320} />}
              {!loading && product.name}
            </Title>
            <SubTitle size="large" color={colors.black}>
              {loading && <Skeleton width={220} />}
              {!loading && product.type}
            </SubTitle>
            <div className="price-container">
              <p className="product-price">
                <p className="current-price">
                  {loading && <Skeleton width={120} height={60} />}
                  {!loading && (
                    <span>
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  )}
                </p>
                <p className="previous-price">
                  {loading && <Skeleton width={120} height={20} />}
                  {!loading && (
                    <span>
                      {product.compare_at_price
                        ? `(${product.compare_at_price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })})`
                        : null}
                    </span>
                  )}
                </p>
              </p>
              <div className="product-shipping">
                <div>
                  {loading && <Skeleton width={20} height={20} inline={true} />}
                  {!loading && <Truck />}
                  <p>
                    {loading && <Skeleton width={100} height={20} />}
                    {!loading
                      ? product.brand === "iRobot"
                        ? "Free shipping"
                        : "Starts at $4.50"
                      : null}
                  </p>
                </div>
                <p>
                  {loading && <Skeleton width={120} height={20} />}
                  {!loading && "Next day delivery"}
                </p>
              </div>
            </div>
            <div className="button-container">
              {product.stock <= 0 ? (
                loading ? (
                  <Skeleton width={193} height={60} />
                ) : (
                  <Button disabled>Out of stock</Button>
                )
              ) : (
                <>
                  {loading && <Skeleton width={193} height={60} />}
                  {!loading && (
                    <Button secondary buy>
                      <CartFill width={24} height={24} />
                      <p>Add to Cart</p>
                    </Button>
                  )}
                  {loading && <Skeleton width={193} height={60} />}
                  {!loading && (
                    <Button primary buy>
                      <BagFill width={24} height={24} />
                      Buy now
                    </Button>
                  )}
                </>
              )}
            </div>
            <p className="product-description">
              {loading && <Skeleton width="100%" height={20} count={5} />}
              {!loading && product.description}
            </p>
          </div>
        </section>
      </div>
    </StyledProduct>
  );
};

export default PreviewProduct;
