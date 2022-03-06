import React from "react";
import userContext from "./userContext";
import MovieRow from "./MovieRow";

function MovieList(props) {
  return (
    <userContext.Consumer>
      {(userContext) => (
        <div className="container">
          Movie List {userContext.currentUser} <MovieRow />
        </div>
      )}
    </userContext.Consumer>
  );
}

export default MovieList;
