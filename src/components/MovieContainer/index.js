import React, { useContext, useEffect, useState } from "react";
import { Movie, Image, Link } from "./styles";

import { Favs } from "../favs";

import Context from "../../Context/userContext";

export const MovieContainer = ({ id, src }) => {
  const { isAuth } = useContext(Context);

  return (
    <Movie>
      {isAuth ? <Favs id={id} src={src} /> : null}
      <Link to={`/detail/${id}`}>
        <Image src={src} alt="" />
      </Link>
    </Movie>
  );
};
