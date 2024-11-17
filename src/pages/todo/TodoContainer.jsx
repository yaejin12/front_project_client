import React, { useEffect, useState } from "react";
import CheckBox from "../../components/checkBox/CheckBox";
import S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import BasicInput from "../../components/input/BasicInput";
import useInput from "../../hooks/useInput";

function TodoContainer({ todoData, setUpdateTodoList }) {
  const [isCheck, setIsCheck] = useState(todoData.isChecked);
  const [isEditIcon, setIsEditIcon] = useState(false);
  const [value, onChangeValue, setValue] = useInput(todoData.title);

  // 체크박스 클릭 유무
  const checkBoxClickHandler = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/todo/${todoData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...todoData,
            isChecked: !isCheck,
          }),
        }
      );
    } catch (error) {
    } finally {
      setIsCheck(!isCheck);
    }
  };

  // 삭제 기능
  const trashClickHandler = async () => {
    console.log("삭제 클릭");
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await fetch(`http://localhost:4000/todo/${todoData.id}`, {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
    } finally {
      setUpdateTodoList((prev) => !prev);
    }
  };

  // 수정 클릭 이벤트
  const onEditClick = async () => {
    setIsEditIcon((prev) => !prev);
  };

  // 수정 완료 아이콘 클릭 핸들러
  const onEditCompleteClickHandler = async () => {
    try {
      await fetch(`http://localhost:4000/todo/${todoData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...todoData,
          title: value,
        }),
      });
    } catch (error) {
      console.log("edit fetch error");
    } finally {
      setUpdateTodoList((prev) => !prev);
      setIsEditIcon((prev) => !prev);
    }
  };

  return (
    <>
      <S.LiWrapper>
        <S.LeftWrapper>
          <CheckBox onClickHandler={checkBoxClickHandler} checked={isCheck} />
          <S.Memo className={isCheck ? "checkClickBox" : ""}>
            {isEditIcon ? (
              <BasicInput
                value={value}
                style={"white"}
                onChange={onChangeValue}
              />
            ) : (
              todoData.title
            )}
          </S.Memo>
        </S.LeftWrapper>
        <S.RightWrapper>
          {isEditIcon ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon"
              onClick={onEditCompleteClickHandler}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPencil}
              className="icon"
              onClick={onEditClick}
            />
          )}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
            onClick={trashClickHandler}
          />
        </S.RightWrapper>
      </S.LiWrapper>
    </>
  );
}

export default TodoContainer;
