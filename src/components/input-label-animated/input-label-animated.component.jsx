import React from "react";
import PropTypes from "prop-types";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer
} from "./input-label-animated.styles.jsx";

//  props : onChange, label, name, id, value, required, type
const InputLabelAnimated = ({ label, value, ...props }) => {
  return (
    <React.Fragment>
      <GroupContainer>
        <FormInputContainer {...props} value={value} />
        {label ? (
          <FormInputLabel className={value.length ? "shrink" : ""}>
            {label}
          </FormInputLabel>
        ) : null}
      </GroupContainer>
    </React.Fragment>
  );
};

InputLabelAnimated.propTypes = {
  label: PropTypes.string && PropTypes.element.isRequired,
  onChange: PropTypes.func && PropTypes.element.isRequired,
  name: PropTypes.string && PropTypes.element.isRequired,
  value: PropTypes.string && PropTypes.element.isRequired,
  id: PropTypes.string && PropTypes.element.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string
};

export default InputLabelAnimated;
