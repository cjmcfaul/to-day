import { GET_TASK_ITEMS, ADD_TASK_ITEM, COMPLETE_TASK_ITEM } from "./TaskItemTypes";

const initialState = {
  taskItems: []
};

export const taskItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_ITEMS:
      return {
        ...state,
        taskItems: action.payload
      };
    case ADD_TASK_ITEM:
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload]
      };
    case COMPLETE_TASK_ITEM:
      return {
        ...state,
        taskItems: [...state.taskItem, action.payload]
      }
    default:
      return state;
  }
};