import React from "react";

import { SubmitButtonContainer } from "./submit-button.styles";

const SubmitButton = ({ label, ...props }) => (
  <React.Fragment>
    <SubmitButtonContainer {...props}>{label}</SubmitButtonContainer>
  </React.Fragment>
);

export default SubmitButton;
