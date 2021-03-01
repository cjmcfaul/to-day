import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer";
import { taskListReducer } from "./components/tasklist/TaskListReducer";
import {taskItemReducer} from "./components/taskitem/TaskItemReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer,
    taskLists: taskListReducer,
    taskItems: taskItemReducer
  });

export default createRootReducer;