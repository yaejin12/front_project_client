import React from "react";
import S from "./styles";

const BasicInput = React.forwardRef(
  ({ placeholder, type, value, style, ...rest }, ref) => {
    return (
      <S.Input
        className={style === "white" ? "wBG" : ""}
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
