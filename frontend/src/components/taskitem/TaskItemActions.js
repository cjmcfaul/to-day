import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_TASK_ITEMS, ADD_TASK_ITEM, COMPLETE_TASK_ITEM } from "../taskitem/TaskItemTypes";

export const getTaskItems = taskList => dispatch => {
  axios
    .get(`/api/task-list/${taskList.uuid}/task-items/`)
    .then(response => {
      dispatch({
        type: GET_TASK_ITEMS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addTaskItem = taskItem => dispatch => {
  axios
    .post("/api/task-items/", taskItem)
    .then(response => {
      console.log(taskItem);
      dispatch({
        type: ADD_TASK_ITEM,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const markTaskComplete  = taskItem => dispatch => {
  axios
    .put(`/api/task-items/${taskItem.uuid}/?q=complete`, taskItem)
    .then(response => {
      dispatch({
        type: COMPLETE_TASK_ITEM,
        payload: response.data
      })
    })
    .catch(error => {
      toastOnError(error);
    });
};