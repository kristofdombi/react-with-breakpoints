import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import airbnbBreakpoints from '../util/airbnb-breakpoints';

export default function withBreakpoints(WrappedComponent) {
  class WithBreakpoints extends PureComponent {
    state = {
      currentBreakpoint: '',
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize, { passive: true });
      this.handleResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      const clientWidth = window.innerWidth;
      const { breakpoints } = this.props;
      if (clientWidth < breakpoints.small) {
        this.setState({
          currentBreakpoint: 'small',
        });
      } else if (clientWidth < breakpoints.medium) {
        this.setState({
          currentBreakpoint: 'medium',
        });
      } else if (clientWidth <= breakpoints.large || clientWidth > breakpoints.large) {
        this.setState({
          currentBreakpoint: 'large',
        });
      }
    }

    render() {
      return (
        <WrappedComponent currentBreakpoint={ this.state.currentBreakpoint } { ...this.props } />
      );
    }
  }
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithBreakpoints.WrappedComponent = WrappedComponent;
  WithBreakpoints.displayName = `withBreakpoint(${wrappedComponentName})`;

  WithBreakpoints.propTypes = {
    breakpoints: PropTypes.shape({
      small: PropTypes.number.isRequired,
      medium: PropTypes.number.isRequired,
      large: PropTypes.number.isRequired,
    }),
  };

  WithBreakpoints.defaultProps = {
    breakpoints: airbnbBreakpoints,
  };

  return WithBreakpoints;
}
