import React, { useContext, useEffect, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Header";
import { Home } from "./Home";
import { Router, Redirect } from "@reach/router";
import { Detail } from "../pages/Detail";
import { MovieList } from "./MovieList";
import { Results } from "./Results";
import { MobileMenu } from "./menu";
import { Register } from "../pages/Register";
import { User } from "../pages/User";
import { Context } from "../Context/ContextAuth";
import { WatchLater } from "../pages/watchLater";

export default () => {
  const { isAuth } = useContext(Context);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Header />

      <Router>
        <Home path="/home/" />
        <Home path="/" />
        <Detail path="/detail/:id/" />
        <MovieList path="/category/:category/" />
        <Results path="/results/:search" />
        {!isAuth && <Redirect noThrow from="/watchlater" to="/register" />}
        {!isAuth && <Redirect noThrow from="/user" to="/register" />}
        {isAuth && <Redirect noThrow from="/register" to="/" />}
        <User path="/user" />
        <WatchLater path="/watchlater" />
        <Register path="/register" />
      </Router>
      <MobileMenu />
    </Suspense>
  );
};
