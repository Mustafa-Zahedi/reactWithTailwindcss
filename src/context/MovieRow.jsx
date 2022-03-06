import React from "react";
import userContext from "./userContext";
import { useContext } from "react";

function MovieRow(props) {
  const currentUser = useContext(userContext);

  return <div>{currentUser.name}</div>;
}

export default MovieRow;
