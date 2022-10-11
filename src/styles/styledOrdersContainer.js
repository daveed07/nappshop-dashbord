import styled from "styled-components";

const StyledOrdersContainer = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
  background: #fff;

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table thead th {
    background: #f6f7fb;
  }

  .table thead th,
  tbody td {
    padding: 0.95rem 0.95rem;
  }

  .order-id {
    width: 10%;
  }

  .customer {
    width: 16.4%;
  }

  .order-date {
    width: 16.4%;
  }

  .payment-status {
    width: 16.4%;
  }

  .order-total {
    width: 16.4%;
  }

  .payment-method {
    width: 16.4%;
  }

  .order-status {
    width: 16.4%;
  }

  .actions {
    width: 17%;
  }
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .table .sort {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .pagination-count {
    font-size: 14px;
    font-weight: 600;
    color: rgba(108, 117, 125, 1);
  }

  .pagination-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pagination-buttons button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledOrdersContainer;