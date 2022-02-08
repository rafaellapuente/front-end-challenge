import styled from "styled-components";

export const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  width: 191px;
  height: 336px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 16px;
`;
export const IMG = styled.div`
  width: 175px;
  height: 222px;
  background: ${(props) =>
    props.back === null
      ? "#E5E5E5"
      : `url(https://image.tmdb.org/t/p/w500${props.back})`};
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;
export const Name = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #131313;
`;
export const Character = styled.small`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #131313;
`;
