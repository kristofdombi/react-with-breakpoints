import * as React from 'react'

import { BreakpointEdge } from './breakpoint-types'
import Context from './context'
import setShouldRender from './set-should-render'

function useBreakpoint(breakpoint: BreakpointEdge, isHideAt?: Boolean): Boolean {
  const { currentBreakpoint } = React.useContext(Context)

  let shouldRender = false

  switch (currentBreakpoint) {
    case 'small':
      shouldRender = setShouldRender(
        ['small', 'mediumAndBelow', 'largeAndBelow'],
        breakpoint,
        isHideAt
      )
      break
    case 'medium':
      shouldRender = setShouldRender(
        ['medium', 'mediumAndAbove', 'mediumAndBelow', 'largeAndBelow'],
        breakpoint,
        isHideAt
      )
      break
    case 'large':
      shouldRender = setShouldRender(
        ['mediumAndAbove', 'large', 'largeAndBelow', 'largeAndAbove'],
        breakpoint,
        isHideAt
      )
      break
    case 'xlarge':
      shouldRender = setShouldRender(
        ['mediumAndAbove', 'largeAndAbove', 'xlarge'],
        breakpoint,
        isHideAt
      )
      break
  }

  return shouldRender
}

export default useBreakpoint
