import React from "react";
import { useForm } from "react-hook-form";
import BasicInput from "../../components/input/BasicInput";
import S from "./styles";
import Button from "../../components/button/Button";

function SignUp() {
  /**
   * register: input요소를 React hook form 과 연결해 검증 규칙을 적용할 수 있게 하는 메서드
   * handleSubmit: form을 submit했을 때 실행할 함수
   * getValues: input value 가져올 수 있는 함수
   * formState: form state에 관한 정보를 담고 있는 객체
   * errors : input 값의 에러 정보를 가지고 있는 객체
   * 
   * 그리고 useForm({mode : "onChange"}) mode라는 것도 있는데
   * mode를 설정함으로써 해당 모드의 register 안 검증 로직이 동작하는 규칙을 정할 수 있습니다.
   *    -onChange: input 값이 바뀔 때 마다 검증 로직이 동작합니다.
   *    -onBlur: 포커스 상태를 잃어 버릴때 동작합니다
   *    -onSubmit: 제출 함수가 실행 될 때 동작합니다
   *    -onTouched: 첫 번째 blur 이벤트에서 동작합니다. 그 후 에는 모든 change이벤트에서 동작합니다
   *    -all: blur 및 change 이벤트에서 동작합니다.
  
   */
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
      <S.Title>회원가입</S.Title>
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
      {/* 비밀번호 확인 */}
      <S.InputWrapper>
        <S.Label>
          <BasicInput
            type="passwordCk"
            placeholder={"비밀번호 확인"}
            {...register("passwordCk", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <p>비밀번호를 입력해주세요.</p>
          )}
        </S.Label>
      </S.InputWrapper>
      {/* 버튼 */}
      <S.ButtonWrapper>
      <Button>완료</Button>
      </S.ButtonWrapper>
    </form>
  );
}

export default SignUp;
