import styled from "styled-components";
import colors from "@constants/colors";

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .message-container {
    padding: 10px 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 10px;
    color: #666;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }

  .cancel {
    background-color: ${colors.greyLight};
    color: ${colors.black};
    border: 1px solid ${colors.greyDark};

    &:hover {
      background-color: ${colors.greyDark};
      color: ${colors.white};
    }
  }

  .delete {
    background-color: ${colors.red};
    color: #fff;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export default StyledModal;