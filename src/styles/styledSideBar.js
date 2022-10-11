import styled from "styled-components";

const StyledSideBar = styled.div`
  position: fixed;
  width: 13.65%;
  min-width: 259.89px;
  height: 100vh;
  padding: 10px 0;
  background: #313a46;

  .top-section {
    display: flex;
    justify-content: center;
  }
  .top-section img {
    width: 84px;
    height: 84px;
    filter: grayscale(1) invert(1);
  }

  .bottom-section p {
    color: #fff;
    padding: 12px 30px;
  }

  .bottom-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .bottom-section ul li {
    color: #8391a2;
    padding: 24px 38px;
    cursor: pointer;

    &:hover {
      color: #bccee4;
      background: #2a323e;
    }

    &.focus {
      color: #fff;
    }
  }
`;

export default StyledSideBar;