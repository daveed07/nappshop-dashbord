import styled from "styled-components";
import colors from "@constants/colors";
import sizes from "@constants/fontSizes";

const styledProduct = styled.div`
  width: 100%;

  .product-section {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 0;
    justify-content: center;

    .product-images {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .product-images img:first-child, .product-images figure:first-child {
      height: 320px;
      max-height: 320px;
      min-width: 320px;
      max-width: 320px;
      object-fit: cover;
    }

    .display-images {
      position: relative;
      width: 100%;
      max-width: 500px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      overflow: hidden;
    }

    .image-container img, .image-container figure {
      width: 100px !important;
      height: 100px !important;
      min-width: 100px !important;
      padding: 4px;
    }
  }

  p {
    margin-top: 8px;
  }

  .price-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 24px;
  }

  .current-price {
    display: flex;
    align-items: flex-end;
    font-size: ${sizes.xxxxlarge};
    font-weight: 800;
    color: ${colors.main};
  }

  .current-price span {
    font-size: ${sizes.xxxlarge};
    margin-right: 2px;
  }

  .previous-price {
    font-size: ${sizes.medium};
    font-weight: 600;
    color: ${colors.mainDark};
    text-decoration: line-through;
  }

  .previous-price span {
    font-size: ${sizes.small};
    margin-right: 1px;
  }

  .product-shipping {
    width: fit-content;
    padding: 20px 24px;
    background: ${colors.greyLight};
    border-radius: 8px;
  }

  .product-shipping div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .product-shipping p {
    font-size: var(--md);
  }

  .product-shipping div p {
    color: ${colors.main};
    font-weight: 600;
    margin: 0;
  }

  .product-shipping > p {
    text-align: right;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 16px;
    margin-top: 48px;
  }

  .product-description {
    width: 100%%;
    min-width: 100%;
    font-size: ${sizes.medium};
    margin-top: 42px;
    line-height: 1.6rem;
  }

  .image-container {
    position: relative;
  }

  .remove-image {
    position: absolute;
    top: 0;
    right: 0;
    background: ${colors.red};
    padding: 4px;
    border-radius: 50%;
    cursor: pointer;
  }

  .remove-image button {
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    color: #fff;
    font-size: ${sizes.small};
    font-weight: 600;
    cursor: pointer;
  }
`;

export default styledProduct;
