import styled from "styled-components";
import colors from "@constants/colors";

const StyledCreateProduct = styled.div`
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
    display: flex;
  }

  .form-container {
    width: 1020px;
    padding: 24px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    background: #fff;
  }

  .form-group-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .wrapper-1 {
    grid-template-columns: repeat(3, 1fr);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .form-group label {
    margin-bottom: 8px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    padding: 8px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
  }

  .form-group textarea {
    height: 100px;
    line-height: 1.5;
  }

  .stock-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .stock-change {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  #stock {
    width: 40px;
    height: 40px;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  .stock-change button {
    width: 40px;
    height: 40px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    cursor: pointer;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 20px;
  }

  .button-wrapper button {
    padding: 16px;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }

  .button-wrapper .cancel {
    background: ${colors.red};
    color: #fff;

    &:hover {
      background: #c82333;
    }
  }

  .button-wrapper .save {
    background: ${colors.main};
    color: #fff;

    &:hover {
      background: ${colors.mainDark};
    }
  }

  .image-input-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  #image {
    width: 100%;
  }

  .add-image {
    width: 40px;
    height: 40px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .preview-container {
    width: 100%;
    max-width: 640px;
    padding: 0 48px;
  }
`;

export default StyledCreateProduct;
