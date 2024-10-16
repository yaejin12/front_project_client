import React from "react";

function SignUpInput({
  S,
  type,
  placeholder,
  patternRegex,
  errorsRequiredText,
  errorsPatternText,
}) {
  return (
    <S.Label>
      <BasicInput
        type={type}
        placeholder={placeholder}
        {...register("email", {
          required: true,
          ...(patternRegex && { pattern: { value: {patternRegex} } }),
        })}
      />
      {errors?.email?.type === "required" && <p>{errorsRequiredText}</p>}
      {errors?.email?.type === "pattern" && <p>{errorsPatternText}</p>}
    </S.Label>
  );
}

export default SignUpInput;
