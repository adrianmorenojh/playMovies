import React, { useContext, useEffect, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Header";
import { Home } from "./Home";
import { Router, Redirect } from "@reach/router";

import { Login } from "../pages/login";

import { Detail } from "../pages/Detail";
import { MovieList } from "./MovieList";
import { Results } from "./Results";
import { MobileMenu } from "./menu";
import { Register } from "../pages/register";
import { WatchLater } from "../pages/watchLater";
import Context from "../Context/userContext";

export default () => {
  const { isAuth } = useContext(Context);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Header />

        <Router>
          <Home path="/home/" />
          <Home path="/" />
          <Detail exact path="/detail/:id/" />
          <Login path="/login" />
          <MovieList path="/category/:category/" />
          <Results path="/results/:search" />
          {!isAuth && <Redirect noThrow from="/watchlater" to="/register" />}
          {isAuth && <Redirect noThrow from="/register" to="/" />}
          <WatchLater path="/watchlater" />
          <Register path="/register" />
        </Router>
        <MobileMenu />
      </Suspense>
    </div>
  );
};
