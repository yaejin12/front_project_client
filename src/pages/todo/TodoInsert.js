import React from "react";
import useInput from "../../hooks/useInput";

function TodoInsert() {
  //onKeyPress 이벤트를 사용 후 e.key === "Enter" ->엔터 클릭한지 알 수 있다

  const [value, onChangeValue, setValue] = useInput();
  const onPressAddTodo = (e)=>{

  }
  return <div>TodoInsert</div>;
}

export default TodoInsert;
