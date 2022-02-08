import styled from "styled-components";

export const TemplateCard = styled.div`
  width: 176px;
  height: 320px;
  .t {
    margin-top: 8px;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }

  .d {
    font-weight: 700;
    font-size: 14px;
    color: #646464;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 400px) {
    width: 156px;
  }
`;
export const IMG = styled.div`
  width: 176px;
  height: 264px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  background: url(${(props) => `https://image.tmdb.org/t/p/w500${props.back}`});
  background-position: center;
  background-size: cover;
  @media (max-width: 400px) {
    width: 156px;
    height: 232px;
  }
`;
