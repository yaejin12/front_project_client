import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoContainer from "./TodoContainer";
import S from "./styles";

function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [updateTodoList, setUpdateTodoList] = useState(false);
  const getTodo = async () => {
    const response = await fetch("http://localhost:4000/todo");
    const data = await response.json();
    setTodoData(data);
  };

  useEffect(() => {
    getTodo();
  }, [updateTodoList]);

  return (
    <>
      <TodoInsert
        todoData={todoData}
        setTodoData={setTodoData}
        setUpdateTodoList={setUpdateTodoList}
      />
      <S.ContainerWrapper>
        {todoData &&
          todoData?.map((todo) => (
            <TodoContainer key={todo.id} todoData={todo} setUpdateTodoList={setUpdateTodoList}/>
          ))}
      </S.ContainerWrapper>
    </>
  );
}

export default Todo;
