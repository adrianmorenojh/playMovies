import React, { useState, useEffect } from "react";

import { FavIcon } from "./styles";
import { BsHeartFill, BsHeart } from "react-icons/bs";

export const Favs = ({ id, src }) => {
  const [state, setState] = useState("");
  const handleClick = () => {
    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
      setState(<BsHeart size="20px" />);
    } else {
      localStorage.setItem(id, src);
      setState(<BsHeartFill size="20px" />);
    }
  };

  useEffect(() => {
    localStorage.getItem(id)
      ? setState(<BsHeartFill size="20px" />)
      : setState(<BsHeart size="20px" />);
  }, []);
  return <FavIcon onClick={handleClick}>{state}</FavIcon>;
};
