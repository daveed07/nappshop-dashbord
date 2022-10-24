import styled from "styled-components";

const StyledOrderItem = styled.tr`
  border-style: solid;
  border-width: 0;
  border-color: #dee2e6;

  td {
    border-bottom: 1px solid #dee2e6;
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

  .payment-status p {
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  .payment-status .paid {
    color: #28a745;
    background-color: #c3e6cb;
    border-color: #c3e6cb;
  }

  .payment-status .pending {
    color: #ffc107;
    background-color: #ffeeba;
    border-color: #ffeeba;
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

  .order-status p {
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  .order-status .pending {
    color: #ffc107;
    background-color: #ffeeba;
    border-color: #ffeeba;
  }

  .order-status .processing {
    color: #0dcaf0;
    background-color: #bee5eb;
    border-color: #bee5eb;
  }

  .order-status .shipped {
    color: #0d6efd;
    background-color: #cfe2ff;
    border-color: #cfe2ff;
  }

  .order-status .delivered {
    color: #198754;
    background-color: #c3e6cb;
    border-color: #c3e6cb;
  }

  .order-status .cancelled {
    color: #dc3545;
    background-color: #f5c6cb;
    border-color: #f5c6cb;
  }

  .actions {
    width: 17%;
  }

  p {
    color: rgba(108, 117, 125, 1);
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

export default StyledOrderItem;
