import React from "react";
import { Title } from "./styles";

import { CategoryContainer } from "../CategoryContainer";
import { Carrusel } from "../carousel";

export const Home = () => {
  return (
    <>
      <Title>Peliculas Populares</Title>
      <Carrusel category="horror" />
      <Title>Peliculas Recientes</Title>
      <CategoryContainer category="all" />
    </>
  );
};
