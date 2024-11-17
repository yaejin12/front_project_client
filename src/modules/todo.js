import { handleActions } from "redux-actions";

const todoInitialValue = {
  todo: [], // 기본 상태를 명확하게 정의
};
const todo = handleActions({}, todoInitialValue);

export default todo;
