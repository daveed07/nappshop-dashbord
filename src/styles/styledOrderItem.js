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
