import React from "react";

import { SubmitButtonContainer } from "./submit-button.styles";

const SubmitButton = ({ onChange, label, isGoogleSignIn }) => (
  <React.Fragment>
    <SubmitButtonContainer
      type="submit"
      isGoogleSignIn={isGoogleSignIn}
      onClick={e => onChange(e)}
      onTouchStart={e => onChange(e)}
    >
      {label}
    </SubmitButtonContainer>
  </React.Fragment>
);

export default SubmitButton;
