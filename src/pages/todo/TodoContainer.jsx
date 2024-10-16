import React, { useEffect, useState } from "react";
import CheckBox from "../../components/checkBox/CheckBox";
import S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoContainer({ todoData }) {
  // console.log("todoData : ", todoData);

  return (
    <>
      <S.LiWrapper>
        <S.LeftWrapper>
          <CheckBox />
          <S.Memo>{todoData.title}</S.Memo>
        </S.LeftWrapper>
        <S.RightWrapper>
          <FontAwesomeIcon icon={faPencil} className="icon" />
          <FontAwesomeIcon icon={faTrashCan} className="icon" />
        </S.RightWrapper>
      </S.LiWrapper>
    </>
  );
}

export default TodoContainer;
