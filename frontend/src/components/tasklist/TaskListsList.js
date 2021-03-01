import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTaskLists } from "./TaskListActions";

import TaskList from "./TaskList";

class TaskListsList extends Component {
  componentDidMount() {
    this.props.getTaskLists();
  }

  render() {
    const { taskLists } = this.props.taskLists;

    if (taskLists.length === 0) {
      return <h2>Please add your first to-do list.</h2>;
    }

    let items = taskLists.map(taskList => {
      return <TaskList key={taskList.uuid} taskList={taskList} />;
    });

    return (
      <div>
        <h2>To-Do Lists</h2>
        {items}
      </div>
    );
  }
}

TaskListsList.propTypes = {
  getTaskLists: PropTypes.func.isRequired,
  taskLists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  taskLists: state.taskLists
});

export default connect(mapStateToProps, {
  getTaskLists
})(withRouter(TaskListsList));