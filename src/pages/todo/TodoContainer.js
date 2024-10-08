import React, { useEffect, useState } from "react";

function TodoContainer() {
  const [todo, setTodo] = useState([]);
  const [isTodoUpdate, setIsTodoUpdate] = useState(false);
  const getTodo = async () => {
    const response = await fetch("http://localhost:4000/todo");
    const dates = await response.json();
    setTodo(dates);
  };

  useEffect(() => {
    getTodo();
  }, [isTodoUpdate]);
  return <div></div>;
}

export default TodoContainer;
