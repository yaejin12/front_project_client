import { handleAction } from "redux-actions";

const todoInitialValue = {};
const todo = handleAction({}, todoInitialValue);

export default todo;
