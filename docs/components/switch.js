import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    className={ `
      switch-button
      ${props.isSelected ? 'switch-button--active' : ''}
      ` }
    onClick={ props.onClick }
  >{ props.children }</button>
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

const Switch = props => (
  <div className="switch">
    { props.children }
  </div>
);

Switch.Button = Button;
Switch.displayName = 'Switch';
Switch.propTypes = {
  children: PropTypes.node,
};

export default Switch;
