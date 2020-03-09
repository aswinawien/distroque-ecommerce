import React from "react";
import PropTypes from "prop-types";

import "./button-clear.styles.scss";

const ButtonClear = ({ color, title, onClick }) => (
  <React.Fragment>
    <button
      className="button button-clear"
      style={{
        color: `${color}`
      }}
      onTouchStart={onClick}
      onClick={onClick}
    >
      {title}
    </button>
  </React.Fragment>
);

ButtonClear.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string && PropTypes.element.isRequired,
  onClick: PropTypes.func && PropTypes.element.isRequired
};

export default ButtonClear;
