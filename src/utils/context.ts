import * as React from 'react'
import { Breakpoint } from './breakpoint-types'

const Context = React.createContext({
  currentBreakpoint: '' as Breakpoint
})

export default Context
