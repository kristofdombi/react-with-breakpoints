import React from 'react';
import { withBreakpoints } from './withBreakpoints';
import setShouldRender from '../util/set-should-render';
import PropTypes from '../util/shared-propTypes';

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

HideAt.propTypes = PropTypes;

HideAt.displayName = 'HideAt';

HideAt.defaultProps = {
  breakpoint: '',
  currentBreakpoint: '',
  children: null,
};

export default withBreakpoints(HideAt);
