import React from "react";
import { Link } from "react-router-dom";
import S from "../main/styles";
const logo = process.env.PUBLIC_URL + "/images/main/Group 284.svg";

function Main() {
  return (
    <S.Wrapper>
      <div className="img-wrapper">
        <img src={logo} alt="이미지"></img>
      </div>
      <div className="buttonWrapper">
        <Link to={"/signIn"}>
          <button>로그인</button>
        </Link>
        <Link to={"/signUp"}>
          <button>회원가입</button>
        </Link>
      </div>
    </S.Wrapper>
  );
}

export default Main;
