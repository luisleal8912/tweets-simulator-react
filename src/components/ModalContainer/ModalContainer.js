import React from "react";
import { Modal } from "@material-ui/core";

import "./ModalContainer.scss";

export default function Modalcontainer(props) {
  const { isOpenModal, closedModal, children } = props;

  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closedModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
