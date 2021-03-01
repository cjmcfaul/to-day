import { GET_TASK_LISTS, ADD_TASK_LIST } from "./TaskListTypes";

const initialState = {
  taskLists: []
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_LISTS:
      return {
        ...state,
        taskLists: action.payload
      };
    case ADD_TASK_LIST:
      return {
        ...state,
        taskLists: [...state.taskLists, action.payload]
      };
    default:
      return state;
  }
};