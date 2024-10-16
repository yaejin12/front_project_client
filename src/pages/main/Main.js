import React from "react";
import { Link } from "react-router-dom";
import S from "../main/styles";
import Button from "../../components/button/Button";
const logo = process.env.PUBLIC_URL + "/images/main/Group 20.svg";

function Main() {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={logo} alt="이미지"></img>
      </S.ImageWrapper>
      <S.ButtonWrapper>
        <Link to={"/signIn"}>
          <Button>로그인</Button>
        </Link>
        <Link to={"/signUp"}>
          <Button>회원가입</Button>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default Main;
