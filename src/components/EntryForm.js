import React, { useState } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon={"tags"}
          width={12}
          label="Description"
          placeholder="NEw shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon={"dollar"}
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>

      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setisExpense((oldState) => !oldState)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
