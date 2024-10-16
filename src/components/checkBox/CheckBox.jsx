import React from "react";
import S from "./styles";

function CheckBox({ onClickHandler, ...rest }) {
  return (
    <S.Input type="checkbox" onChange={onClickHandler} {...rest}></S.Input>
  );
}

export default CheckBox;
