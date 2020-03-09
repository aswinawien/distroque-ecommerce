import React from "react";
import PropTypes from "prop-types";
import "./input-label-animated.styles.scss";

//  props : onChange, label, name, id, value, required, type
const InputLabelAnimated = ({ label, value, ...props }) => {
  console.log("value", value);
  return (
    <React.Fragment>
      <div className="form-item">
        <input {...props} className="form-input" value={value} />
        {label ? (
          <label
            className={`form-input-label ${value.length >
              0} ? shrink form-input-label : form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
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
