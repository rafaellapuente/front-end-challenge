import React from "react";
import { Corpo } from "./styled";

export default (props) => {
  return (
    <Corpo>
      <h2>{props.name}</h2>
      <small>{props.function}</small>
    </Corpo>
  );
};
