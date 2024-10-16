import React from "react";
import useInput from "../../hooks/useInput";
import BasicInput from "../../components/input/BasicInput";
import S from "./styles";

function TodoInsert({ todoData, setTodoData }) {
  //onKeyPress 이벤트를 사용 후 e.key === "Enter" ->엔터 클릭한지 알 수 있다
  const [value, onChangeValue, setValue] = useInput();

  const onPressAddTodo = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await fetch("http://localhost:4000/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: todoData.length + 1,
            title: value,
            isChecked: false,
          }),
        });

        const newTodoData = await response.json();
        console.log("newTodoData", newTodoData);

        setTodoData((prevTodoData) => [...prevTodoData, newTodoData]);
      } catch (error) {
        console.log("POST Todo 오류");
      } finally {
        setValue("");
      }
    }
  };
  return (
    <>
      <S.Title>Todo List</S.Title>
      <BasicInput
        placeholder={"할 일을 작성하세요."}
        // value={value}
        onChange={onChangeValue}
        onKeyPress={onPressAddTodo}
      />
    </>
  );
}

export default TodoInsert;
