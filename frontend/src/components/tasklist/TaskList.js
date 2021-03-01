import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskItemsList from "../taskitem/TaskItemsList";
import AddTaskItem from "../taskitem/AddTaskItem";

class TaskList extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <div>
        <h1>{taskList.name}</h1>
        <TaskItemsList key={taskList.uuid} taskList={taskList} />
        <AddTaskItem key={taskList.uuid} taskList={taskList} />
      </div>
    );
  }
}

TaskList.propTypes = {
  taskList: PropTypes.object.isRequired
};
export default TaskList;