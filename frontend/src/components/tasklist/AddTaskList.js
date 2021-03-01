import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addTaskList } from "./TaskListActions";

class AddTaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const taskList = {
      name: this.state.name
    };
    this.props.addTaskList(taskList);
  };

  render() {
    return (
      <div>
        <h2>Create New To-Do List</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>List Name</Form.Label>
            <Form.Control
              as="input"
              name="name"
              placeholder="What do you want to call your to-do list?"
              value={this.name}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Create
        </Button>
      </div>
    );
  }
}

AddTaskList.propTypes = {
  addTaskList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addTaskList })(withRouter(AddTaskList));