import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_TASK_LISTS, ADD_TASK_LIST } from "./TaskListTypes";

export const getTaskLists = () => dispatch => {
  axios
    .get("/api/task-lists/")
    .then(response => {
      dispatch({
        type: GET_TASK_LISTS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addTaskList = taskList => dispatch => {
  axios
    .post("/api/task-lists/", taskList)
    .then(response => {
      dispatch({
        type: ADD_TASK_LIST,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};