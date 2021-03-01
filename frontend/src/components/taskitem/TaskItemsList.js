import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TaskItem from "./TaskItem";

class TaskItemsList extends Component {
  render() {
    const { taskList } = this.props;
    if (taskList.tasks.length === 0) {
      return <h2>Please add your first task</h2>;
    }

    let items = taskList.tasks.map(taskItem => {
      return <TaskItem key={taskItem.uuid} taskList={taskList} taskItem={taskItem} />;
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}

TaskItemsList.propTypes = {
  taskList: PropTypes.object.isRequired,
};

export default TaskItemsList;