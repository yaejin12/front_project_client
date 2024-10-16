import React from "react";
import S from "./styles";

function CheckBox({ onClickHandler }) {
  return <S.Input type="checkbox" onClick={onClickHandler}></S.Input>;
}

export default CheckBox;
