import React from "react";
import S from "./styles";

const BasicInput = React.forwardRef(
  ({ placeholder, type, value, ...rest }, ref) => {
    return (
      <S.Input
        type={type}
        value={value}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default BasicInput;
