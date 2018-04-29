import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import airbnbBreakpoints from '../util/airbnb-breakpoints';

const Context = React.createContext();

export const withBreakpointsContext = (WrappedComponent) => {
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
