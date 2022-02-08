import React from "react";
import { Link } from "react-router-dom";
import { TemplateCard, IMG } from "./styled";

const Card = (props) => {
  props.subir && window.scrollTo({ top: 0, behavior: "smooth" });
  const formatDate = (date) => {
    let cDate = new Date(date);

    let months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];
    let cDay = cDate.getDay() + 1;
    let cMonths = cDate.getMonth();
    let cYear = cDate.getFullYear();

    return `${cDay < 10 ? "0" + cDay : cDay} ${months[cMonths]} ${cYear}`;
  };

  return (
    <TemplateCard>
      <Link to={`/film/${props.data.id}`}>
        <IMG back={props.data.poster_path} />
        <h3 className="t">{props.data.title}</h3>
        <small className="d">{formatDate(props.data.release_date)}</small>
      </Link>
    </TemplateCard>
  );
};

export default Card;
