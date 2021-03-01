import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { markTaskComplete } from "./TaskItemActions";
import {connect} from "react-redux";
import {addTaskList} from "../tasklist/TaskListActions";
import {withRouter} from "react-router-dom";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      task_list: ""
    };
  }
  completeOnClick = () => {
    const taskItem = {
      uuid: this.props.taskItem.uuid,
      name: this.props.taskItem.name,
      task_list: this.props.taskList.uuid
    }
    this.props.markTaskComplete(taskItem);
  };

  render() {
    const { taskItem } = this.props;
    return (
      <div>
        <Form inline >
            <Form.Check
              name="complete"
              label={taskItem.name}
              onChange={this.onChange}
              onClick={this.completeOnClick}
            />
        </Form>
      </div>
    );
  }
}

TaskItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
  markTaskComplete: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { markTaskComplete })(withRouter(TaskItem))