import React, { useContext } from "react";
import { Link } from "./styles";

import useUser from "../../Hooks/useUser";
import Context from "../../Context/userContext";
export const Login = () => {
  const { logout } = useUser();
  const { isAuth } = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      {isAuth ? (
        <Link to="/" onClick={handleClick}>
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
