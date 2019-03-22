import * as Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { BreakpointsProvider, HideAt } from '../src/react-with-breakpoints'
import { airbnbBreakpoints as breakpoints } from '../src/utils'
import { resizeWindow } from './utils'

Enzyme.configure({ adapter: new Adapter() })

describe('<HideAt />', () => {
  const child = <div>Hello</div>

  it('allows us to set props', () => {
    const $ = mount(<HideAt breakpoint="small" />)
    expect($.props().breakpoint).toBe('small')
    $.setProps({ breakpoint: 'mediumAndBelow' })
    expect($.props().breakpoint).toBe('mediumAndBelow')
  })

  it('renders child if props are different', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="small">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('renders its children if breakpoint is mediumAndBelow and currentBreakpoint is large', () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="mediumAndBelow">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('renders its children if breakpoint is largeAndBelow and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="largeAndBelow">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('renders its children if breakpoint is large and currentBreakpoint is medium', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="large">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('renders its children if breakpoint is large and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="large">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('hides its children if breakpoint is large and currentBreakpoint is large', () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="large">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if breakpoint is xlarge and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="xlarge">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="mediumAndAbove">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if breakpoint is mediumAndAbove and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="mediumAndAbove">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if breakpoint is largeAndAbove and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="largeAndAbove">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if breakpoint is medium and currentBreakpoint is medium', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="medium">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children if props are the same', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="mediumAndBelow">
          {child}
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children breakpoint is largeAndBelow and currentBreakpoint is medium', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="largeAndBelow">
          { child }
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('hides its children breakpoint is largeAndBelow and currentBreakpoint is small', () => {
    resizeWindow(breakpoints.small)
    const $ = mount(
      <BreakpointsProvider>
        <HideAt breakpoint="largeAndBelow">
          { child }
        </HideAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })
})
