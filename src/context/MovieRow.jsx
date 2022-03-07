import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("cartContext", cartContext);

  return (
    <div>
      Movie row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
