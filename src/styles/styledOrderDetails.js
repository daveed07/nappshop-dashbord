import styled from "styled-components";
import colors from "@constants/colors";

const StyledOrderDetails = styled.div`
  width: 100%;
  margin-left: 260px;
  padding: 24px 20px;

  .title {
    width: fit-content;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .main-container {
    width: 100%;
  }

  .first-row {
    width: 100%;
    display: grid;
    grid-template-columns: 67% 33%;
    grid-gap: 20px;
    justify-content: center;
    padding: 0 8px;
    margin-bottom: 20px;
  }

  .first-row-left,
  .first-row-right,
  .second-row-left,
  .second-row-middle,
  .second-row-right {
    width: 100%;
    padding: 24px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    background: #fff;
  }

  .second-row {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 20px;
    justify-content: center;
    padding: 0 8px;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 18px;
    color: #495057;
  }

  .items-table,
  .summary-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14.5px;
    color: #6c757d;
  }

  .items-table th,
  .items-table td,
  .summary-table th,
  .summary-table td {
    padding: 18px;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
  }

  .items-table th,
  .summary-table th {
    background: #f6f7fb;
  }

  .item {
    width: 365px;
  }

  .quantity {
    width: 140px;
  }

  .price,
  .total {
    width: 103px;
  }

  .description {
    width: 280px;
  }

  .summary-table .price {
    width: 182px;
  }

  .summary-table .total {
    font-weight: 600;
  }

  .shipping-info {
    width: 100%;
    line-height: 24px;
    font-size: 14.5px;
    color: #6c757d;
  }

  .payment-info-header,
  .delivery-info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .payment-info-header h2,
  .delivery-info-header h2 {
    margin-bottom: 0;
  }

  .payment-info-header .edit-btn,
  .delivery-info-header .edit-btn {
    padding: 8px;
    border: 1px solid #6c757d;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 14.5px;
    color: #6c757d;
    cursor: pointer;
  }

  .payment-info {
    width: 100%;
    line-height: 24px;
    font-size: 14.5px;
    color: #6c757d;
  }

  .payment-info select, .delivery-info select {
    width: 120px;
    padding: 4px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 14.5px;
    color: #6c757d;
  }

  .delivery-info {
    width: 100%;
    line-height: 24px;
    font-size: 14.5px;
    color: #6c757d;
  }

  .delivery-name {
    font-weight: 600;
  }

  .third-row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
  }

  .third-row .button-container {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }

  .third-row .button-container button {
    width: 100%;
    max-width: 80px;
    padding: 12px;
    border: 1px solid #6c757d;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 14.5px;
    color: #6c757d;
    cursor: pointer;
  }

  .third-row .button-container button:disabled {
    background: #fff;
    border: 1px solid #6c757d;
    color: #6c757d;

    &:hover {
      background: #fff;
      border: 1px solid #6c757d;
      color: #6c757d;
    }
  }

  .third-row .button-container button:hover {
    background: #6c757d;
    color: #fff;
  }

  .third-row .button-container .cancel-btn {
    border: 1px solid #dc3545;
    color: #dc3545;
  }

  .third-row .button-container .cancel-btn:hover {
    background: #dc3545;
    color: #fff;
  }

  .third-row .button-container .save-btn {
    border: 1px solid #28a745;
    color: #28a745;
  }

  .third-row .button-container .save-btn:hover {
    background: #28a745;
    color: #fff;
  }
`;

export default StyledOrderDetails;
