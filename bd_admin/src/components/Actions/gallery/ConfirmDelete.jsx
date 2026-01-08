import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ConfirmDelete = ({ isOpen, toggle, onDelete, eventName }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
      <ModalBody>
        Are you sure you want to delete this?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete}>
          Yes, Delete
        </Button>
        <Button color="secondary" onClick={toggle}>
          No, Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDelete;