import React from 'react';
import ReactDOM from 'react-dom';
import { HideAt, ShowAt } from '../dist/react-with-breakpoints';

import './css/main.scss';

const HelloWorld = () => (
  <div>
    <h2>small</h2>
    <HideAt breakpoint="small">
      <h1 style={ { color: 'red' } }>small</h1>
    </HideAt>
    <ShowAt breakpoint="small">
      <h1 style={ { color: 'green' } }>small</h1>
    </ShowAt>
    <h2>medium</h2>
    <HideAt breakpoint="medium">
      <h1 style={ { color: 'red' } }>medium</h1>
    </HideAt>
    <ShowAt breakpoint="medium">
      <h1 style={ { color: 'green' } }>medium</h1>
    </ShowAt>
    <h2>mediumAndBelow</h2>
    <HideAt breakpoint="mediumAndBelow">
      <h1 style={ { color: 'red' } }>mediumAndBelow</h1>
    </HideAt>
    <ShowAt breakpoint="mediumAndBelow">
      <h1 style={ { color: 'green' } }>mediumAndBelow</h1>
    </ShowAt>
    <h2>mediumAndAbove</h2>
    <HideAt breakpoint="mediumAndAbove">
      <h1 style={ { color: 'red' } }>mediumAndAbove</h1>
    </HideAt>
    <ShowAt breakpoint="mediumAndAbove">
      <h1 style={ { color: 'green' } }>mediumAndAbove</h1>
    </ShowAt>
    <h2>large</h2>
    <HideAt breakpoint="large">
      <h1 style={ { color: 'red' } }>large</h1>
    </HideAt>
    <ShowAt breakpoint="large">
      <h1 style={ { color: 'green' } }>large</h1>
    </ShowAt>
  </div>
);

HelloWorld.displayName = 'HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
