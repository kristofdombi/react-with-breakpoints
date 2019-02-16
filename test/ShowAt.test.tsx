import * as Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { BreakpointsProvider, ShowAt } from '../src/react-with-breakpoints'
import { airbnbBreakpoints as breakpoints } from '../src/utils'
import { resizeWindow } from './utils'

Enzyme.configure({ adapter: new Adapter() })

describe('<ShowAt />', () => {
  const child = <div>Hello</div>

  it('allows us to set props', () => {
    const $ = mount(<ShowAt breakpoint="small" />)
    expect($.props().breakpoint).toBe('small')
    $.setProps({ breakpoint: 'mediumAndBelow' })
    expect($.props().breakpoint).toBe('mediumAndBelow')
  })

  it("doesn't render its child if props are different", () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="small">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it("doesn't render its child if breakpoint is mediumAndBelow and currentBreakpoint is large", () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="mediumAndBelow">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it("doesn't render its child if breakpoint is largeAndBelow and currentBreakpoint is xlarge", () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="largeAndBelow">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it("doesn't render its child if breakpoint is large and currentBreakpoint is medium", () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="large">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it("doesn't render its child if breakpoint is xlarge and currentBreakpoint is large", () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="xlarge">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(false)
  })

  it('shows its children if breakpoint is large and currentBreakpoint is large', () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="large">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('shows its children if breakpoint is xlarge and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="xlarge">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('shows its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    resizeWindow(breakpoints.large)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="mediumAndAbove">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('shows its children if breakpoint is largeAndAbove and currentBreakpoint is xlarge', () => {
    resizeWindow(breakpoints.xlarge)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="largeAndAbove">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('shows its children if breakpoint is medium and currentBreakpoint is medium', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="medium">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })

  it('shows its children if props are the same', () => {
    resizeWindow(breakpoints.medium)
    const $ = mount(
      <BreakpointsProvider>
        <ShowAt breakpoint="mediumAndBelow">{child}</ShowAt>
      </BreakpointsProvider>
    )
    expect($.contains(child)).toBe(true)
  })
})
