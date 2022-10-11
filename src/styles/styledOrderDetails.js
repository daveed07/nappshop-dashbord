import styled from "styled-components";

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

  .price, .total {
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

  .payment-info {
    width: 100%;
    line-height: 24px;
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
`;

export default StyledOrderDetails;
