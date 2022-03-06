import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import userContext from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "Hasan" } };

  render() {
    return (
      <userContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
