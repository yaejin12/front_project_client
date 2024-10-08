import React from "react";
import S from "./styles";

function Button({ ref, children, size, shape, variant, ...rest }) {
  return (
    <S.Button ref={ref} size={size} shape={shape} variant={variant} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
