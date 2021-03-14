import React from "react";
import { Container, H1, P } from "./styles";
import { MovieContainer } from "../../components/MovieContainer";

export const WatchLater = () => {
  // Object.entries(localStorage).length ?
  localStorage.removeItem("loglevel:webpack-dev-server");
  localStorage.removeItem("user");
  console.log(localStorage);
  return Object.entries(localStorage).length ? (
    <Container>
      <H1>Ver mas tarde</H1>
      {Object.entries(localStorage).map((movie) => (
        <MovieContainer key={movie[0]} id={movie[0]} src={movie[1]} />
      ))}
    </Container>
  ) : (
    <Container>
      <H1>Ver mas tarde</H1>
      <P>No hay Peliculas.</P>
    </Container>
  );
};
