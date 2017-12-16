import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import ShowAt from './ShowAt';

describe('<ShowAt />', () => {
  it('allows us to set props', () => {
    const $ = mount((
      <ShowAt breakpoint="small" currentBreakpoint="small" />
    ));
    assert.equal($.props().breakpoint, 'small');
    assert.equal($.props().currentBreakpoint, 'small');
    $.setProps({ breakpoint: 'mediumAndBelow' });
    assert.equal($.props().breakpoint, 'mediumAndBelow');
    $.setProps({ currentBreakpoint: 'medium' });
    assert.equal($.props().currentBreakpoint, 'medium');
  });

  it('doesn\'t render its child if props are different', () => {
    const $ = mount((
      <ShowAt breakpoint="small" currentBreakpoint="medium">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('doesn\'t render its child if breakpoint is mediumAndBelow and currentBreakpoint is large', () => {
    const $ = mount((
      <ShowAt breakpoint="mediumAndBelow" currentBreakpoint="large">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('doesn\'t render its child if breakpoint is large and currentBreakpoint is medium', () => {
    const $ = mount((
      <ShowAt breakpoint="large" currentBreakpoint="medium">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), false);
  });

  it('shows its children if breakpoint is large and currentBreakpoint is large', () => {
    const $ = mount((
      <ShowAt breakpoint="large" currentBreakpoint="large">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), true);
  });

  it('shows its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    const $ = mount((
      <ShowAt breakpoint="mediumAndAbove" currentBreakpoint="large">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), true);
  });

  it('shows its children if breakpoint is medium and currentBreakpoint is medium', () => {
    const $ = mount((
      <ShowAt breakpoint="medium" currentBreakpoint="medium">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), true);
  });

  it('shows its children if props are the same', () => {
    const $ = mount((
      <ShowAt breakpoint="mediumAndBelow" currentBreakpoint="medium">
        <div>Hello</div>
      </ShowAt>
    ));
    assert.deepStrictEqual($.children().exists(), true);
  });
});
