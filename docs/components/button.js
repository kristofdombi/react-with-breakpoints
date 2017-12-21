import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    className={ `button ${ props.neutral && 'neutral' }` }
    onClick={ props.onClick }
  >
    { props.children }
  </button>
);

Button.displayName = 'Button';

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  neutral: PropTypes.bool,
};

export default Button;
