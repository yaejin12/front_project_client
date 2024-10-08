import {
  faBell,
  faHouse,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import S from "./styles";

function Layout() {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Header>
          <Link to={"/"}>Jin Todo</Link>
        </S.Header>
        <S.Main>
          <Outlet />
        </S.Main>
        <S.Nav>
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <p>피드</p>
          </NavLink>
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <p>검색</p>
          </NavLink>
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <p>알림</p>
          </NavLink>
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p>My</p>
          </NavLink>
        </S.Nav>
        
      </S.Wrapper>
    </S.Background>
  );
}

export default Layout;
