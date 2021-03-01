import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addTaskItem } from "./TaskItemActions";

class AddTaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      task_list: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const taskItem = {
      name: this.state.name,
      task_list: this.props.taskList.uuid,
    };
    this.props.addTaskItem(taskItem);
  };

  render() {
    return (
      <div>
        <Form inline >
          <Form.Group controlId="contentId">
            <Form.Control
              as="input"
              name="name"
              placeholder=""
              value={this.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="success" onClick={this.onAddClick} className="ml-2">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

AddTaskItem.propTypes = {
  taskList: PropTypes.object.isRequired,
  addTaskItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addTaskItem })(withRouter(AddTaskItem));