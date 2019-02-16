import * as React from 'react'

import { BreakpointEdge, useBreakpoint } from './utils'

interface ShowAtProps {
  breakpoint: BreakpointEdge
  children?: React.ReactNode
}

// @ts-ignore
export const ShowAt: React.FunctionComponent<ShowAtProps> = ({ breakpoint, children }) => {
  const shouldRender = useBreakpoint(breakpoint, false)

  if (shouldRender) {
    return children
  }
  return null
}

ShowAt.displayName = 'ShowAt'

ShowAt.defaultProps = {
  breakpoint: '' as BreakpointEdge,
  children: null
}

export default ShowAt
