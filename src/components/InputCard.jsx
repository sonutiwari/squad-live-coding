import React from "react";
import { Button, Card, FormControl } from "react-bootstrap";
export default function InputCard(props) {
  const { name, value, onChange, onClick } = props;
  return (
    <Card>
      <FormControl name={name} type="text" value={value} onChange={onChange} />
      <Button onClick={onClick}>add</Button>
    </Card>
  );
}
