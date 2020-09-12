import React, { Component } from "react";
import { Card } from "react-bootstrap";
import InputCard from "./InputCard";
import Task from "./Task";

export default class Tasks extends Component {
  listName = this.props.listName;
  state = {
    taskList: [],
    taskName: "",
  };

  handleAddTask = () => {
    const { taskName, taskList } = this.state;
    this.setState({
      taskList: [...taskList, taskName],
      taskName: "",
    });
  };

  handleTaskNameChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handlDragStart = (event, task) => {
    console.log(task);
    event.dataTransfer.setData("task", JSON.stringify(task));
  };

  handleDrop = (event, { index, listName: currentListName }) => {
    const { task, listName, index: oldIndex } = JSON.parse(
      event.dataTransfer.getData("task")
    );
    const { taskList } = this.state;
    if (currentListName === listName) {
      taskList.splice(index, 0, task);
      console.log("tasklist", taskList);
      index <= oldIndex
        ? taskList.splice(oldIndex + 1, 1)
        : taskList.splice(oldIndex, 1);
    }
    this.setState({ taskList: [...taskList] });
  };

  handleDragOver = (event) => {
    event.preventDefault();
  };
  render() {
    const { taskName, taskList } = this.state;
    const { listName } = this.props;
    return (
      <>
        <Card>
          <Card.Title>{listName}</Card.Title>
          {taskList.map((task, index) => (
            <Task
              key={`task-${index}`}
              task={task}
              onDragStart={(e) =>
                this.handlDragStart(e, { task, type: "task", listName, index })
              }
              onDrop={(e) => this.handleDrop(e, { index, listName })}
              onDragOver={this.handleDragOver}
            />
          ))}
          <InputCard
            name="taskName"
            value={taskName}
            onChange={this.handleTaskNameChange}
            onClick={this.handleAddTask}
          />
        </Card>
      </>
    );
  }
}
