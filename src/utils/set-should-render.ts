import { BreakpointEdge } from './index'

export default function(
  breakpoints: Array<BreakpointEdge> = [],
  breakpoint = '' as BreakpointEdge,
  isHideAt: Boolean = true
) {
  let shouldRender = true
  !isHideAt && (shouldRender = false)
  breakpoints.map(b => {
    breakpoint === b && (shouldRender = isHideAt ? false : true)
  })
  return shouldRender
}
