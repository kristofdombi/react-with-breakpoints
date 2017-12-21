import PropTypes from 'prop-types';
import breakpointTypes from './breakpoint-types';

export default {
  breakpoint: PropTypes.oneOf(breakpointTypes).isRequired,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  children: PropTypes.node,
};
