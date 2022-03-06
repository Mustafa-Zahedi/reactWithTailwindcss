import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const userContext1 = useContext(UserContext);

  return (
    <div>
      <button
        className="btn"
        onClick={() => userContext1.onLoggedIn("username")}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
