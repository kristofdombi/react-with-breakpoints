import * as React from 'react'

import { airbnbBreakpoints, debounce, Context, Breakpoint } from './utils'

type Breakpoints = {
  small: number
  medium: number
  large: number
  xlarge: number
}

interface BreakpointsProviderProps {
  breakpoints?: Breakpoints
  children?: React.ReactNode
}

const BreakpointsProvider = ({ breakpoints, children }: BreakpointsProviderProps) => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState('' as Breakpoint)

  React.useLayoutEffect(() => {
    const debouncedResize = debounce(handleResize, 50)

    window.addEventListener('resize', debouncedResize, { passive: true })
    handleResize()

    return () => {
      window.removeEventListener('resize', debouncedResize)
    }
  }, [])

  const handleResize = () => {
    const clientWidth = window.innerWidth
    if (clientWidth < breakpoints.small) {
      setCurrentBreakpoint('small')
    } else if (clientWidth < breakpoints.medium) {
      setCurrentBreakpoint('medium')
    } else if (clientWidth < breakpoints.large) {
      setCurrentBreakpoint('large')
    } else if (clientWidth <= breakpoints.xlarge || clientWidth > breakpoints.xlarge) {
      setCurrentBreakpoint('xlarge')
    }
  }

  return <Context.Provider value={{ currentBreakpoint }}>{children}</Context.Provider>
}

BreakpointsProvider.defaultProps = {
  breakpoints: airbnbBreakpoints
}

BreakpointsProvider.displayName = 'BreakpointsProvider'

export default BreakpointsProvider
