import React from "react";
import { Container, Div, Logo, P, Title, LinkRouter, LinkHome } from "./styles";
import { Search } from "../Search";
import BurgerMenu from "../BurgerMenu";
// import { HeaderMenu } from '../headerMenu'
import { Login } from "../Login";
import { ImUser } from "react-icons/im";
import { IoIosTime } from "react-icons/io";

function Header() {
  return (
    <Container>
      <Div>
        <LinkHome to="/home">
          <Logo>
            <Title>PelisPlay</Title>
          </Logo>
        </LinkHome>
        <LinkRouter to="/watchlater">
          <IoIosTime />
          <P>Ver mas tarde</P>
        </LinkRouter>
        <BurgerMenu />
        <Search />
        <div>
          <Login />
        </div>
      </Div>
    </Container>
  );
}
export default React.memo(Header);
