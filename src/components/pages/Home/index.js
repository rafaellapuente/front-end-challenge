import React, { useEffect, useState } from "react";
import {
  AreaFiltre,
  AreaHome,
  Buttom,
  Content,
  ListCards,
  Paginacao,
  SearchArea,
  Titulo,
  TituloSear,
} from "./styled";

import Api from "../../../helpers/api";
import { PageContainer } from "../../MainComponents";
import Card from "../../partials/Card";

const Home = () => {
  const [listCat, setListCat] = useState([]);
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);

  const listar = () => {
    Api.get(
      `movie/popular?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR&page=${page}`
    ).then(({ data }) => {
      setListFilm(data.results);
    });
  };
  useEffect(() => {
    Api.get(
      "genre/movie/list?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR"
    ).then(({ data }) => {
      setListCat(data.genres);
    });
  }, []);
  useEffect(() => listar(), []);
  useEffect(() => {
    listar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <AreaHome>
      <SearchArea>
        <Content>
          <Titulo>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </Titulo>
          <TituloSear>FILTRE POR:</TituloSear>
          <AreaFiltre>
            {listCat?.map((i) => (
              <Buttom key={i.id}>{i.name}</Buttom>
            ))}
          </AreaFiltre>
        </Content>
      </SearchArea>
      <PageContainer>
        <ListCards>
          {listFilm?.map((i) => (
            <Card key={i.id} data={i} />
          ))}
        </ListCards>
        <Paginacao>
          <small onClick={() => setPage(1)}>1</small>
          <small onClick={() => setPage(2)}>2</small>
          <small onClick={() => setPage(3)}>3</small>
          <small onClick={() => setPage(4)}>4</small>
          <small onClick={() => setPage(5)}>5</small>
          <small
            onClick={() => setPage(page === 5 ? page : page + 1)}
          >{`>`}</small>
          <small onClick={() => setPage(5)}>Última</small>
        </Paginacao>
      </PageContainer>
    </AreaHome>
  );
};

export default Home;
