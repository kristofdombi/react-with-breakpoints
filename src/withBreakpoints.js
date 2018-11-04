import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import airbnbBreakpoints from '../util/airbnb-breakpoints';

const Context = React.createContext();

// debouncing function for kristof0425/react-with-breakpoints/29
const debounce = (func, interval) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval);
  };
};

export const withBreakpoints = (WrappedComponent) => {
  const Component = (props) => (
    <Context.Consumer>
      { payload => (
        <WrappedComponent
          { ...props }
          currentBreakpoint={ payload.currentBreakpoint }
        />
      ) }
    </Context.Consumer>
  );
  Component.displayName = `withBreakpoints(${
    WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component'
  })`;
  return Component;
};

export default class BreakpointsProvider extends PureComponent {
  static displayName = 'BreakpointsProvider';

  static propTypes = {
    breakpoints: PropTypes.shape({
      small: PropTypes.number.isRequired,
      medium: PropTypes.number.isRequired,
      large: PropTypes.number.isRequired,
      xlarge: PropTypes.number.isRequired,
    }),
    children: PropTypes.node,
  };

  static defaultProps = {
    breakpoints: airbnbBreakpoints,
  };

  state = {
    currentBreakpoint: '',
  }

  componentDidMount() {
    const debouncedResize = debounce(this.handleResize, 50);
    window.addEventListener('resize', debouncedResize, { passive: true });
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
    } else if (clientWidth < breakpoints.large) {
      this.setState({
        currentBreakpoint: 'large',
      });
    } else if (clientWidth <= breakpoints.xlarge || clientWidth > breakpoints.xlarge) {
      this.setState({
        currentBreakpoint: 'xlarge',
      });
    }
  }

  render() {
    return (
      <Context.Provider
        value={ {
          currentBreakpoint: this.state.currentBreakpoint,
        } }
      >
        { this.props.children }
      </Context.Provider>
    );
  }
}
