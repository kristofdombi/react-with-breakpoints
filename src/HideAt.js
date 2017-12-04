import React from 'react';
import PropTypes from 'prop-types';
import withBreakpoint from './withBreakpoint';

function HideAt({ breakpoint, currentBreakpoint, children }) {
  let shouldRender;

  if (breakpoint.includes('small') && currentBreakpoint === 'small') {
    shouldRender = false;
  } else {
    shouldRender = true;
  }

  if (breakpoint.includes('medium')) {
    if (breakpoint.includes('AndBelow') && currentBreakpoint !== 'large') {
      shouldRender = false;
    } else if (breakpoint.includes('AndAbove') && currentBreakpoint !== 'small') {
      shouldRender = false;
    } else if (breakpoint === 'medium' && currentBreakpoint === 'medium') {
      shouldRender = false;
    }
  }

  if (breakpoint.includes('large')) {
    if (breakpoint.includes('AndBelow')) {
      shouldRender = false;
    } else if (currentBreakpoint !== 'large') {
      shouldRender = true;
    } else {
      shouldRender = false;
    }
  }

  if (shouldRender) {
    return (<div>{ children }</div>);
    // TODO: solve unnecessary else after return
    // eslint-disable-next-line
  } else {
    return null;
  }
}

HideAt.propTypes = {
  breakpoint: PropTypes.oneOf(['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'largeAndBelow', 'large']).isRequired,
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
