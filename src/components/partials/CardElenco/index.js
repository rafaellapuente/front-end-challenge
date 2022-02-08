import React from "react";
import { Character, Corpo, IMG, Name } from "./styled";

const CardElenco = (props) => {
  return (
    <Corpo>
      <IMG back={props.data && props.data.profile_path} />
      <Name>{props.data.name}</Name>
      <Character>{props.data.character}</Character>
    </Corpo>
  );
};
export default CardElenco;
