import { createAction, handleAction } from "redux-actions";
const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER";
const SET_USER_STATUS = "user/SET_USER_STATUS";

// 액션 생성 함수: 액션을 쉽게 만들기 위한 함수
// 액션 생성 함수는 인자로 받은 값을 payload(데이터)로 갖는 액션을 반환함
export const setPreviousUrl = createAction(
  SET_PREVIOUS_URL,
  (previousUrl) => previousUrl
);

export const setUser = createAction(SET_USER, (currentUser) => currentUser);

export const setUserStatus = createAction(
  SET_USER_STATUS,
  (isLogin) => isLogin
);

// 초기 상태 설정:
const initialValue = {
  currentUser: {}, // 현재 사용자 정보는 빈 객체
  isLogin: false, // 로그인 상태는 기본적으로 false
  previousUrl: "", // 이전 URL은 빈 문자열
};

// 리듀서 함수 정의: 상태를 변경하는 함수
// handleAction은 액션에 따라 상태를 변경하는 코드를 단순화해 줌
const user = handleAction(
  {
    [SET_PREVIOUS_URL]: (state = initialValue, action) => ({
      ...state,
      previousUrl: action.payload,
    }),
    [SET_USER]: (state = initialValue, action) => ({
      ...state,
      currentUser: action.payload,
    }),
    [SET_USER_STATUS]: (state = initialValue, action) => ({
      ...state,
      isLogin: action.payload,
    }),
  },

  initialValue // 초기 상태 값
);

// 리듀서 함수 내보내기:
// 나중에 리덕스 스토어에 이 리듀서를 연결해서 사용할 수 있음
export default user;
