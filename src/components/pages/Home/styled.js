import styled from "styled-components";

export const AreaHome = styled.div``;

export const SearchArea = styled.div`
  min-height: 449px;
  background-color: #2d0c5e;
  padding-top: 85px;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    justify-content: flex-start;
    padding-top: 40px;
    height: 570px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1033px;
  max-height: 280px;
  @media (max-width: 400px) {
    max-width: 328px;
    margin: 0 auto;
    align-items: flex-start;
  }
`;
export const Titulo = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  max-width: 781px;
  margin-bottom: 40px;
  @media (max-width: 400px) {
    font-size: 24px;
    text-align: left;
  }
`;
export const TituloSear = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  width: 90px;
  margin-bottom: 24px;
`;
export const AreaFiltre = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  @media (max-width: 400px) {
    justify-content: flex-start;
  }
`;
export const Buttom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 16px;
  color: #323232;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const ListCards = styled.div`
  margin-top: 29px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 400px) {
    gap: 16px;
  }
`;
export const Paginacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 361px;
  max-height: 38px;
  margin: 70px auto;

  small {
    font-size: 16px;
    font-weight: 700;
    color: #5c16c5;
    cursor: pointer;
    user-select: none;
  }
`;
