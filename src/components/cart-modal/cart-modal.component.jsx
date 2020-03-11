import React from "react";

import Modal from "react-modal";

import { Title, AnimatedModal } from "./cart-modal.styles";
import Cancel from "../../assets/cancel.svg";
import SubmitButton from "../submit-button/submit-button.component";

Modal.setAppElement(document.getElementById("#root"));

const CartModal = ({ isOpen, closeModal }) => {
  return (
    <React.Fragment>
      <AnimatedModal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Test</h2>
      </AnimatedModal>
    </React.Fragment>
  );
};

export default CartModal;
