import React, { Component } from "react";
import { Row } from "react-bootstrap";
import InputCard from "./InputCard";
import Tasks from "./Tasks";
export default class TaskList extends Component {
  state = {
    listName: "",
    taskList: [],
  };

  handleAddTask = () => {
    const { listName, taskList } = this.state;
    this.setState({
      taskList: [...taskList, listName],
      listName: "",
    });
  };

  handleTaskNameChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { taskList, listName } = this.state;
    return (
      <Row>
        {taskList.map((task, index) => (
          <Tasks listName={task} key={`list-${index}`} />
        ))}
        <InputCard
          name="listName"
          value={listName}
          onChange={this.handleTaskNameChange}
          onClick={this.handleAddTask}
        />
      </Row>
    );
  }
}
