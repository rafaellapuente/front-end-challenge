import styled from "styled-components";

export const AreaInfos = styled.div``;
export const AreaFilm = styled.div`
  height: 600px;
  background-color: #2d0c5e;
  padding-top: 85px;
  display: flex;
  margin-bottom: 74px;

  .container {
    display: flex;
    width: 1231px;
    @media (max-width: 400px) {
      flex-direction: column;
      width: 360px;
      align-items: flex-start;
    }
  }
  .left--side {
    @media (max-width: 400px) {
      display: flex;
      justify-content: center;
      width: 360px;
      margin-bottom: 42px;
    }
  }
  .right--side {
    display: flex;
    flex-direction: column;

    .sinopse--tile {
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
      margin-bottom: 8px;
      margin-top: 32.6px;
    }
    .sinopse--desc {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: -0.005em;
      color: #dddddd;
      width: 696px;
      margin-bottom: 24px;
      line-height: 24px;
    }
    @media (max-width: 400px) {
      justify-content: flex-start;
      align-items: flex-start;

      .sinopse--title {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 3px;
      }
      .sinopse--desc {
        width: 320px;
      }
    }
  }
  @media (max-width: 400px) {
    padding-top: 42px;
    height: auto;
  }
`;
export const IMG = styled.div`
  width: 383px;
  height: 574px;
  background: url(${(props) => `https://image.tmdb.org/t/p/w500${props.back}`});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  margin-right: 33px;
  @media (max-width: 400px) {
    width: 186px;
    height: 279px;
  }
`;
export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 8px;
`;
export const Infos = styled.small`
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 16px;
  @media (max-width: 400px) {
    width: 328px;
  }
`;
export const AreaAvali = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .avalicao {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    margin-right: 12.5px;
    border-radius: 100px;

    .avalition {
      font-weight: 700;
      font-size: 16px;
      color: #14ff00;
      position: absolute;
      line-height: 38px;
      letter-spacing: -0.005em;
    }
  }

  .descri--ava {
    width: 102px;
    height: 40px;
    font-weight: normal;
    font-size: 16px;
    color: #ffffff;
  }
`;
export const Production = styled.div`
  width: 590px;
  height: 111px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 33px;
  @media (max-width: 400px) {
    width: 328px;
    gap: 26px;
    margin-bottom: 33px;
  }
`;
export const AreaCast = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 1231px;

    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 24px;
      color: #131313;
    }
  }
`;
export const CastBox = styled.div`
  heigth: auto;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  width: 1228px;
  padding-bottom: 10px;
  scrollbar-width: thin;
  scrollbar-color: #adadad #dddddd;

  &::-webkit-scrollbar {
    width: 1231px;
    height: 12px;
    background: #dddddd;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 6px;
  }
  @media (max-width: 400px) {
    width: 328px;
  }
`;
export const AreaTrailer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 1231px;

    .title {
      margin-top: 39px;
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      color: #131313;
    }
    @media (max-width: 400px) {
      .video {
        width: 324px;
        height: 182px;
      }
    }
  }
`;
export const AreaRecon = styled.div`
  margin-bottom: 100px;
  .container {
    display: flex;
    flex-direction: column;
    width: 1231px;

    .title {
      margin-top: 64px;
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      color: #131313;
    }
  }
`;
export const ListCards = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 32px;
`;
