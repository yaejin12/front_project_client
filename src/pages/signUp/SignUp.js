import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  /**
   * register: 
   * handleSubmit: 서브밋을 보낼때 우리가 할 수 있는 것
   * getValues: value 가져오는 것
   * formState: { isSubmitted, isSubmitting : 보내는 중, errors },
  
   */
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitted, isSubmitting, errors },
  } = useForm({ mode: "onchange" });

  //정규식 문법
  const emailRegex = null;

  return (
    <form
      className="form"
      onSubmit={handleSubmit(() => {
        console.log("전송");
      })}
    >
      <label className="label">
        <p className="title">이메일</p>
        <input
          type="text"
          className="BasicInput"
          {...register("email", {
            required: true,
            pattern: { value: emailRegex },
          })}
        />
        {errors?.email?.type === "required" && (
          <p>이메일을 다시 입력해주세요</p>
        )}
        {errors?.email?.type === "pattern" && <p>이메일을 다시 입력해주세요</p>}
      </label>
    </form>
  );
}

export default SignUp;
