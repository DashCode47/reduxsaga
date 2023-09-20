import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setisExpense={setisExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>CLose</Button>
        <Button onClick={() => setIsOpen(false)} positive>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
