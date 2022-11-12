import styled from "styled-components";

const StyledProductsContainer = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
  background: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .create-product button {
    width: 148px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: rgb(99 130 253);
    color: #fff;
    cursor: pointer;

    &:hover {
      background: rgb(66, 90, 205);
    }
  }

  .bulk-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .bulk-actions select {
    padding: 8px 16px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 0.875rem;
    color: #495057;
    outline: none;
  }

  .bulk-actions button {
    padding: 8px 16px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 0.875rem;
    color: #495057;
    outline: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .search {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .search input {
    padding: 8px 16px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 0.875rem;
    color: #495057;
    outline: none;
  }

  .search button {
    padding: 8px 16px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 0.875rem;
    color: #495057;
    outline: none;
    cursor: pointer;
  }

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

export default StyledProductsContainer;
