import { handleAction } from "redux-actions";

const userInitialValue = {};
const user = handleAction({}, userInitialValue);

export default user;
