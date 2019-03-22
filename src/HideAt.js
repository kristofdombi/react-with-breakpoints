import React from 'react';
import { withBreakpoints } from './withBreakpoints';
import setShouldRender from '../util/set-should-render';
import PropTypes from '../util/shared-propTypes';

export function HideAt({ breakpoint, currentBreakpoint, children }) {
  let shouldRender;

  switch (currentBreakpoint) {
    case 'small':
      shouldRender = setShouldRender(['small', 'mediumAndBelow', 'largeAndBelow'], breakpoint);
      break;
    case 'medium':
      shouldRender = setShouldRender(['medium', 'mediumAndAbove', 'mediumAndBelow', 'largeAndBelow'], breakpoint);
      break;
    case 'large':
      shouldRender = setShouldRender(['mediumAndAbove', 'large', 'largeAndBelow', 'largeAndAbove'], breakpoint);
      break;
    case 'xlarge':
      shouldRender = setShouldRender(['mediumAndAbove', 'largeAndAbove', 'xlarge'], breakpoint);
      break;
  }

  if (shouldRender) {
    return (<React.Fragment>{ children }</React.Fragment>);
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
