import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import BasicInput from "../../components/input/BasicInput";
import S from "../signUp/styles";

function SignIn() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitted, isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  //정규식 문법
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const pwRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return (
    <form
      className="form"
      onSubmit={handleSubmit(() => {
       
      })}
    >
      <S.Title>로그인</S.Title>
      {/* 아이디 */}
      <S.InputWrapper>
        <S.Label>
          <BasicInput
            type="email"
            placeholder={"이메일"}
            {...register("email", {
              required: true,
              pattern: { value: emailRegex },
            })}
          />
          {errors?.email?.type === "required" && <p>이메일을 입력해주세요.</p>}
          {errors?.email?.type === "pattern" && (
            <p>이메일을 형식이 아닙니다.</p>
          )}
        </S.Label>
      </S.InputWrapper>
      {/* 비밀번호 */}
      <S.InputWrapper>
        <S.Label>
          <BasicInput
            type="password"
            placeholder={"비밀번호"}
            {...register("password", {
              required: true,
              pattern: { value: pwRegex },
            })}
          />
          {errors?.password?.type === "required" && (
            <p>비밀번호를 입력해주세요.</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p>비밀번호 형식이 아닙니다.</p>
          )}
        </S.Label>
      </S.InputWrapper>
            {/* 버튼 */}
      <S.ButtonWrapper>
        <Button>로그인</Button>
      </S.ButtonWrapper>
    </form>
  );
}

export default SignIn;
