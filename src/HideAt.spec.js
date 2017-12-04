import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import HideAt from './HideAt';

describe('<HideAt />', () => {
  it('allows us to set props', () => {
    const $ = mount((
      <HideAt breakpoint="small" currentBreakpoint="small" />
    ));
    assert.equal($.props().breakpoint, 'small');
    assert.equal($.props().currentBreakpoint, 'small');
    $.setProps({ breakpoint: 'mediumAndBelow' });
    assert.equal($.props().breakpoint, 'mediumAndBelow');
    $.setProps({ currentBreakpoint: 'medium' });
    assert.equal($.props().currentBreakpoint, 'medium');
  });

  it('renders child if props are different', () => {
    const $ = mount((
      <HideAt breakpoint="small" currentBreakpoint="medium">
        <div>Hello</div>
      </HideAt>
    ));
    assert($.contains(<div>Hello</div>), true);
  });

  it('renders its children if breakpoint is mediumAndBelow and currentBreakpoint is large', () => {
    const $ = mount((
      <HideAt breakpoint="mediumAndBelow" currentBreakpoint="large">
        <div>Hello</div>
      </HideAt>
    ));
    assert($.contains(<div>Hello</div>), true);
  });

  it('renders its children if breakpoint is large and currentBreakpoint is medium', () => {
    const $ = mount((
      <HideAt breakpoint="large" currentBreakpoint="medium">
        <div>Hello</div>
      </HideAt>
    ));
    assert($.contains(<div>Hello</div>), true);
  });

  it('hides its children if breakpoint is large and currentBreakpoint is large', () => {
    const $ = mount((
      <HideAt breakpoint="large" currentBreakpoint="large">
        <div>Hello</div>
      </HideAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('hides its children if breakpoint is largeAndBelow and currentBreakpoint is large', () => {
    const $ = mount((
      <HideAt breakpoint="largeAndBelow" currentBreakpoint="large">
        <div>Hello</div>
      </HideAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('hides its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    const $ = mount((
      <HideAt breakpoint="mediumAndAbove" currentBreakpoint="large">
        <div>Hello</div>
      </HideAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('hides its children if breakpoint is medium and currentBreakpoint is medium', () => {
    const $ = mount((
      <HideAt breakpoint="medium" currentBreakpoint="medium">
        <div>Hello</div>
      </HideAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('hides its children if props are the same', () => {
    const $ = mount((
      <HideAt breakpoint="mediumAndBelow" currentBreakpoint="medium">
        <div>Hello</div>
      </HideAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });
});
