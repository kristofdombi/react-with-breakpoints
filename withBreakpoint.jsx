import React, { Component } from 'react';
import PropTypes from 'prop-types';

const airbnbBreakpoints = {
  small: 744,
  medium: 1128,
  large: Infinity,
};

export default function withBreakpoint(WrappedComponent) {
  class WithBreakpoint extends Component {
    constructor() {
      super();
      this.state = {
        currentBreakpoint: '',
      };
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      // eslint
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
      const clientWidth = window.innerWidth;
      if (!this.props.breakpoints) {
        if (clientWidth < airbnbBreakpoints.small) {
          this.setState({
            currentBreakpoint: 'small',
          });
        } else if (clientWidth < airbnbBreakpoints.medium) {
          this.setState({
            currentBreakpoint: 'medium',
          });
        } else if (clientWidth <= airbnbBreakpoints.large) {
          this.setState({
            currentBreakpoint: 'large',
          });
        }
      } else {
        // eslint-disable-next-line
        if (clientWidth < this.props.breakpoints.small) {
          this.setState({
            currentBreakpoint: 'small',
          });
        } else if (clientWidth < this.props.breakpoints.medium) {
          this.setState({
            currentBreakpoint: 'medium',
          });
        } else if (clientWidth <= this.props.breakpoints.large) {
          this.setState({
            currentBreakpoint: 'large',
          });
        }
      }
    }

    render() {
      return (
        <WrappedComponent currentBreakpoint={this.state.currentBreakpoint} {...this.props} />
      );
    }
  }
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithBreakpoint.WrappedComponent = WrappedComponent;
  WithBreakpoint.displayName = `withBreakpoint(${wrappedComponentName})`;

  WithBreakpoint.propTypes = {
    // eslint-disable-next-line
    breakpoints: PropTypes.shape({
      small: PropTypes.number.isRequired,
      medium: PropTypes.number.isRequired,
      large: PropTypes.number.isRequired,
    }),
  };

  return WithBreakpoint;
}
