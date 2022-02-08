import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #5c16c5;
  height: 56px;

  .area--logo {
    display: flex;
    align-items: center;
    height: 56px;
    img {
      width: 184.74px;
      height: 24.03px;
    }
    @media (max-width: 400px) {
      justify-content: center;
    }
  }
`;
