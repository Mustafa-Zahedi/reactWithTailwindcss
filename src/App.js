import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import userContext from "./context/userContext";
import Login from "./context/login";
import cartContext from "./context/cartContext";

class App extends Component {
  state = { currentUser: null };

  handleLoggedIn = (username) => {
    console.log(`Getting the user ${username}`);
    const user = { name: "Hasan" };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <cartContext.Provider value={{ cart: [] }}>
        <userContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </userContext.Provider>
      </cartContext.Provider>
    );
  }
}

export default App;
