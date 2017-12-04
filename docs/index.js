import React from 'react';
import ReactDOM from 'react-dom';
import { HideAt } from '../src/react-with-breakpoints';

import './css/main.scss';

const HelloWorld = () => (
  <HideAt breakpoint="small">
    <h1>Hello world!</h1>
  </HideAt>
);

HelloWorld.displayName = 'HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
