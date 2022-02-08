import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import {
  AreaAvali,
  AreaCast,
  AreaFilm,
  AreaInfos,
  AreaRecon,
  AreaTrailer,
  CastBox,
  IMG,
  Infos,
  Production,
  Titulo,
} from "./styled";
import Api from "../../../helpers/api";
import { PageContainer } from "../../MainComponents";
import { useParams } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import Producao from "../../partials/Producao";
import CardElenco from "../../partials/CardElenco";
import { ListCards } from "../Home/styled";
import Card from "../../partials/Card";

const InfosFilm = () => {
  const [infoFilm, setInfoFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [estreia, setEstreia] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [director, setDirector] = useState(false);
  const [screenplay, setScreenplay] = useState(null);
  const [elenco, setElenco] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recomendados, setRecomendados] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    Api.get(
      `movie/${id}?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR`
    ).then(({ data }) => {
      setInfoFilm(data);
      setGenres(data.genres);
    });
  }, [id]);
  useEffect(() => {
    Api.get(
      `movie/${id}/release_dates?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR`
    ).then(({ data }) => {
      let lanc = data.results.find((i) => i.iso_3166_1 === "BR");
      if (lanc) {
        setEstreia(lanc);
      } else {
        setEstreia(data.results[0]);
      }
    });
  }, [id]);

  useEffect(() => {
    Api.get(
      `movie/${id}/credits?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR`
    ).then(({ data }) => {
      let cha = [];
      let dir = data.crew.find((i) => i.job === "Director");
      let scr = [];
      for (let i = 0; i < data.crew.length; i++) {
        if (cha.length < 2) {
          if (data.crew[i].job === "Characters") {
            cha.push(data.crew[i]);
          }
        }
        if (scr.length < 2) {
          if (data.crew[i].job === "Screenplay") {
            scr.push(data.crew[i]);
          }
        }
      }
      setElenco(data.cast);
      setCharacters(cha);
      setDirector(dir);
      setScreenplay(scr);
    });
  }, [id]);
  useEffect(() => {
    Api.get(
      `movie/${id}/videos?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR`
    ).then(({ data }) => {
      setTrailer(data.results[0]);
    });
  }, [id]);
  useEffect(() => {
    Api.get(
      `movie/${id}/recommendations?api_key=0070584e5986377fbb9f89c9db02dedf&language=pt-BR`
    ).then(({ data }) => {
      let recon = [];
      for (let i = 0; i < data.results.length; i++) {
        if (recon.length < 6) {
          recon.push(data.results[i]);
        }
      }
      setRecomendados(recon);
    });
  }, [id]);
  const formatDate = (date) => {
    let cDate = new Date(date);

    let cDay = (cDate.getDay() + 1).toString();
    let dayF = cDay.length === 1 ? "0" + cDay : cDay;

    let cMonths = (cDate.getMonth() + 1).toString();
    let monthsF = cMonths.length === 1 ? "0" + cMonths : cMonths;

    let cYear = cDate.getFullYear();

    return `${dayF}/${monthsF}/${cYear}`;
  };
  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;

    return `${horas}h ${min}m`;
  };
  const generos = (generos) => {
    let newArray = [];
    generos.map((i) => newArray.push(i.name));
    return newArray.join(", ");
  };
  const populari = (num) => {
    let n = num * 10;
    return `${n}%`;
  };
  return (
    <AreaInfos>
      <AreaFilm>
        <PageContainer className="container">
          <div className="left--side">
            {infoFilm.poster_path && <IMG back={infoFilm.poster_path} />}
          </div>
          <div className="right--side">
            <Titulo>{infoFilm.title}</Titulo>
            {estreia && (
              <Infos>
                {`${`${
                  estreia.release_dates[0].certification === "L" ||
                  estreia.release_dates[0].certification === "U"
                    ? "Livre"
                    : estreia.release_dates[0].certification + " anos"
                }`} • ${formatDate(estreia.release_dates[0].release_date)} (${
                  estreia.iso_3166_1
                }) • ${generos(genres)} • ${converter(infoFilm.runtime)}`}
              </Infos>
            )}

            <AreaAvali>
              <div className="avalicao">
                <CircularProgress
                  style={{ color: "#14ff00", width: "60px", height: "60px" }}
                  variant="determinate"
                  value={infoFilm.vote_average * 10}
                />
                <div className="avalition">
                  {populari(infoFilm.vote_average)}
                </div>
              </div>
              <div className="descri--ava">Avaliação dos usuários</div>
            </AreaAvali>
            <small className="sinopse--tile">Sinopse</small>
            <p className="sinopse--desc">{infoFilm.overview}</p>
            <Production>
              {characters &&
                characters.map((i) => (
                  <Producao key={i.id} name={i.name} function={i.job} />
                ))}
              <Producao
                key={director.id}
                name={director.name}
                function={director.job}
              />
              {screenplay &&
                screenplay.map((i) => (
                  <Producao key={i.id} name={i.name} function={i.job} />
                ))}
            </Production>
          </div>
        </PageContainer>
      </AreaFilm>
      <AreaCast>
        <PageContainer className="container">
          <h2 className="title">Elenco original</h2>
          <CastBox className="scroll">
            {elenco && elenco.map((i) => <CardElenco key={i.id} data={i} />)}
          </CastBox>
        </PageContainer>
      </AreaCast>
      {trailer && (
        <AreaTrailer>
          <PageContainer className="container">
            <h2 className="title">Trailer</h2>
            <iframe
              className="video"
              width="907"
              height="510"
              src={trailer && `https://www.youtube.com/embed/${trailer.key}`}
              title={trailer && trailer.name}
            ></iframe>
          </PageContainer>
        </AreaTrailer>
      )}
      <AreaRecon>
        <PageContainer className="container">
          <h2 className="title">Recomendados</h2>
          <ListCards>
            {recomendados &&
              recomendados.map((i) => (
                <Card key={i.id} data={i} subir={true} />
              ))}
          </ListCards>
        </PageContainer>
      </AreaRecon>
    </AreaInfos>
  );
};

export default InfosFilm;
