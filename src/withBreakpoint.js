import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import airbnbBreakpoints from '../util/airbnb-breakpoints';

export default function withBreakpoint(WrappedComponent) {
  class WithBreakpoint extends PureComponent {
    state = {
      currentBreakpoint: '',
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
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
      } else if (clientWidth <= breakpoints.large) {
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

  WithBreakpoint.WrappedComponent = WrappedComponent;
  WithBreakpoint.displayName = `withBreakpoint(${wrappedComponentName})`;

  WithBreakpoint.propTypes = {
    breakpoints: PropTypes.shape({
      small: PropTypes.number.isRequired,
      medium: PropTypes.number.isRequired,
      large: PropTypes.number.isRequired,
    }),
  };

  WithBreakpoint.defaultProps = {
    breakpoints: airbnbBreakpoints,
  };

  return WithBreakpoint;
}
