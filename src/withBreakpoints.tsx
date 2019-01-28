import * as React from 'react'

import { Context } from './utils/index'

const withBreakpoints = WrappedComponent => {
  const Component = props => (
    <Context.Consumer>
      {payload => <WrappedComponent {...props} currentBreakpoint={payload.currentBreakpoint} />}
    </Context.Consumer>
  )
  Component.displayName = `withBreakpoints(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`
  return Component
}

export default withBreakpoints
