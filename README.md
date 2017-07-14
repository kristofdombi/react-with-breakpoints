# react-with-breakpoint

Build leaner webpages with `react-with-breakpoint`. 👌

## How to use

Use withBreakpoint as a utility component. Here is a basic example, how it can be used:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import withBreakpoint from 'react-hide-at';
import HideAt from 'react-hide-at';

// This is how you can make an instance of withBreakpoint
const HideAtWithBreakpoint = withBreakpoint(HideAt);

ReactDOM.render(
  // Hello world will hide on medium screen width and below
  <HideAtWithBreakpoint breakpoint="mediumAndBelow">
    <p>Hello world!</p>
  </HideAtWithBreakpoint>,
  document.getElementById('app')
);

```

### Props
List of props

`breakpoints`: Takes an object, for overwriting the default breakpoint values, with following shape:

```js
const breakpoints = {
  small: Number, // pixel
  medium: Number, // pixel
  large: Number // pixel
}
```

**NOTE:** The shape of the object must look like the one above, otherwise the prop validation is going to fail❗️

### Default breakpoint values
I copied the breakpoint values, from [Airbnb's website](https://airbnb.com).

Breakpoint | Value
--- | ---
small | 744
medium | 1128
large | `Infinity`

### Overwriting the breakpoints

You can overwrite the breakpoints simply by giving a `breakpoints` prop to the instance of `withBreakpoint`.
Example:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import withBreakpoint from 'react-hide-at';
import HideAt from 'react-hide-at';

// This is how you can make an instance of withBreakpoint
const HideAtWithBreakpoint = withBreakpoint(HideAt);

// Declare a constant and assign an object to it,
// with the following properties:
const breakpoints = {
  small: 479,
  medium: 768,
  large: 1440
};

ReactDOM.render(
  // Overwrite breakpoints here, by passing your breakpoints constant
  <HideAtWithBreakpoint breakpoint="mediumAndBelow" breakpoints={ breakpoints }>
    <p>Hello world!</p>
  </HideAtWithBreakpoint>,
  document.getElementById('app')
);
```

## Background story

*Skip this section, if you aren't interested. See you at the technical details. 😉*

As I was reading Adam Neary's article of [Rearchitecting Airbnb’s Frontend](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2), two components caught my attention as a junior frontend developer. These were `HideAt` and `ShowAt`, these components seemed to me easy to 'reverse engineer' 🤓 for a rookie like me, but as it turned I needed to create a HOC as well to be able to share the above two with you, the react community. [Airbnb's website](https://aribnb.com) and the [React dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) helped me with inspiration along the way.

`react-with-breakpoint` is the parent of `HideAt` and `ShowAt`, a higher order component.
