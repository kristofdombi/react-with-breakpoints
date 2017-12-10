import React from 'react';
import PropTypes from 'prop-types';
import withBreakpoints from './withBreakpoints';
import setShouldRender from '../util/set-should-render';

function ShowAt({ breakpoint, currentBreakpoint, children }) {
  let shouldRender;

  switch (currentBreakpoint) {
    case 'small':
      shouldRender = setShouldRender(['small', 'mediumAndBelow'], breakpoint, false);
      break;
    case 'medium':
      shouldRender = setShouldRender(['medium', 'mediumAndAbove', 'mediumAndBelow'], breakpoint, false);
      break;
    case 'large':
      shouldRender = setShouldRender(['mediumAndAbove', 'large'], breakpoint, false);
      break;
  }

  if (shouldRender) {
    return (<div>{ children }</div>);
  }
  return null;
}

ShowAt.propTypes = {
  breakpoint: PropTypes.oneOf(['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'large']).isRequired,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  children: PropTypes.node,
};

ShowAt.displayName = 'ShowAt';

ShowAt.defaultProps = {
  breakpoint: '',
  currentBreakpoint: '',
  children: null,
};

const ShowAtWithBreakpoint = withBreakpoints(ShowAt);

export default ShowAtWithBreakpoint;
