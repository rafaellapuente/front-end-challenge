import styled from "styled-components";

export const Corpo = styled.div`
  height: 44px;
  width: 174px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
  @media (max-width: 400px) {
    width: 140px;
  }
`;
