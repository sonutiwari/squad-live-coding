import React from "react";
import { Card } from "react-bootstrap";

export default function Task(props) {
  const { onDragOver, onDragStart, task, onDrop } = props;
  return (
    <Card
      draggable
      onDragOver={onDragOver}
      className="m-1"
      onDragStart={onDragStart}
      onDrop={onDrop}
    >
      <Card.Title>{task}</Card.Title>
    </Card>
  );
}
