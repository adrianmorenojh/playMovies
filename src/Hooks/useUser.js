import { useContext, useCallback, useState } from "react";
import Context from "../Context/userContext";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJWT(jwt);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
        });
    },
    [setJWT]
  );
  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(false);
  }, []);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLogingError: state.error,
    login,
    logout,
  };
}
