import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (e) => {
    setValue(e.target.values);
  };
  return [value, onChangeValue, setValue];
}

export default useInput;
