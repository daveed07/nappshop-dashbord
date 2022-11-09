import styled from "styled-components";

const StyledProductItem = styled.tr`
  border-style: solid;
  border-width: 0;
  border-color: #dee2e6;
  
  td {
    border-bottom: 1px solid #dee2e6;
  }
  .product-name-image {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .brand {
    width: 200px;
  }

  .category {
    width: 160px;
  }

  .type {
    width: 240px;
  }

  .sku {
    width: 200px;
  }

  .barcode {
    width: 200px;
  }

  .added-date {
    width: 200px;
  }

  .price {
    width: 116.8px;
  }

  .stock {
    width: 145.8px;
  }

  .actions {
    width: 105.6px;
  }

  .product-name-image p {
    width: 160px;
    text-align: left;
  }

  .image img {
    height: 48px;
  }

  p {
    color: rgba(108, 117, 125, 1);
  }

  .product-name {
    width: 100%;
    font-size: 16px;
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .action-buttons button {
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default StyledProductItem;
