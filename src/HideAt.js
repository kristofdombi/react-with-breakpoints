import React from 'react';
import PropTypes from 'prop-types';
import withBreakpoint from './withBreakpoint';
import setShouldRender from '../util/set-should-render';

function HideAt({ breakpoint, currentBreakpoint, children }) {
  let shouldRender;

  switch (currentBreakpoint) {
    case 'small':
      shouldRender = setShouldRender(['small', 'mediumAndBelow'], breakpoint);
      break;
    case 'medium':
      shouldRender = setShouldRender(['medium', 'mediumAndAbove', 'mediumAndBelow'], breakpoint);
      break;
    case 'large':
      shouldRender = setShouldRender(['mediumAndAbove', 'large'], breakpoint);
      break;
  }

  if (shouldRender) {
    return (<div>{ children }</div>);
  }
  return null;
}

HideAt.propTypes = {
  breakpoint: PropTypes.oneOf(['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'large']).isRequired,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  children: PropTypes.node,
};

HideAt.displayName = 'HideAt';

HideAt.defaultProps = {
  breakpoint: '',
  currentBreakpoint: '',
  children: null,
};

const HideAtWithBreakpoint = withBreakpoint(HideAt);

export default HideAtWithBreakpoint;
