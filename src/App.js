import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container>
      <TaskList />
    </Container>
  );
}

export default App;
