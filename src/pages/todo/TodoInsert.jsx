import React from "react";
import useInput from "../../hooks/useInput";
import BasicInput from "../../components/input/BasicInput";
import S from "./styles";
import { v4 as uuidv4 } from "uuid";

function TodoInsert({ todoData, setTodoData, setUpdateTodoList }) {
  //onKeyPress 이벤트를 사용 후 e.key === "Enter" ->엔터 클릭한지 알 수 있다
  const [value, onChangeValue, setValue] = useInput();

  const onPressAddTodo = async (e) => {
    if (e.key === "Enter") {
      if (value.trim() === "") return;
      if (!window.confirm("이대로 추가하시겠습니까?")) return;
      try {
        const response = await fetch("http://localhost:4000/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: uuidv4(),
            title: value,
            isChecked: false,
          }),
        });

        const newTodoData = await response.json();
        setTodoData((prevTodoData) => [...prevTodoData, newTodoData]);
      } catch (error) {
        console.log("POST Todo 오류");
      } finally {
        setUpdateTodoList((prev) => !prev);
        setValue("");
      }
    }
  };
  return (
    <>
      <S.Title>Todo List</S.Title>
      <BasicInput
        placeholder={"할 일을 작성하세요."}
        value={value || ""}
        onChange={onChangeValue}
        onKeyPress={onPressAddTodo}
      />
    </>
  );
}

export default TodoInsert;
