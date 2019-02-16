import * as React from 'react'

import { BreakpointEdge, useBreakpoint } from './utils/index'

interface HideAtProps {
  breakpoint: BreakpointEdge
  children?: React.ReactNode
}

// @ts-ignore
export const HideAt: React.FunctionComponent<HideAtProps> = ({ breakpoint, children }) => {
  const shouldRender = useBreakpoint(breakpoint)

  if (shouldRender) {
    return children
  }
  return null
}

HideAt.displayName = 'HideAt'

HideAt.defaultProps = {
  breakpoint: '' as BreakpointEdge,
  children: null
}

export default HideAt
