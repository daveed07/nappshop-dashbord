import styled from "styled-components";

const StyledUsersItem = styled.tr`
  border-style: solid;
  border-width: 0;
  border-color: #dee2e6;

  td {
    border-bottom: 1px solid #dee2e6;
  }

  .user-id {
    width: 10%;
  }

  .user-name {
    width: 20%;
  }

  .user-full-name {
    width: 20%;
  }

  .user-email {
    width: 20%;
  }

  .user-phone {
    width: 15%;
  }

  .role {
    width: 10%;
  }

  .actions {
    width: 10%;
  }

  p {
    color: rgba(108, 117, 125, 1);
  }

  .actions-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .actions-buttons button {
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

export default StyledUsersItem;
