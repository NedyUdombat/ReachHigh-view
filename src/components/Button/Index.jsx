import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  className,
  type,
  onClick,
  value,
  children,
  props,
  style,
}) => {
  return (
    <button
      className={className ? `custom-btn ${className}` : 'custom-btn rounded-0'}
      type={type}
      onClick={onClick}
      {...props}
      style={style}
    >
      {children ? children : value}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Button;
