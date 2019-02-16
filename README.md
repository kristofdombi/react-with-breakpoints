<p align="center">
  <img src="./assets/logo-with-text.png" />
</p>

# react-with-breakpoints

[![Build Status](https://travis-ci.org/kristof0425/react-with-breakpoints.svg?branch=master)](https://travis-ci.org/kristof0425/react-with-breakpoints)
[![Coverage Status](https://coveralls.io/repos/github/kristof0425/react-with-breakpoints/badge.svg?branch=master)](https://coveralls.io/github/kristof0425/react-with-breakpoints?branch=master)

> Build leaner webpages with `react-with-breakpoints` like Airbnb. 👌

## 🔧 Install

```bash
npm install react-with-breakpoints

# or use yarn

yarn add react-with-breakpoints
```

## 👈 Usage

**NOTE:** If you'd like to access v3 docs, please check the `v3` branch!<br /> 
Beware that, `react-with-breakpoints` v4 depends on React Hooks, which were released with `react@16.8.0`. v3 is still maintained. 

```jsx
// in index.js
import { BreakpointsProvider } from 'react-with-breakpoints';

const myApp = () => (
  <BreakpointsProvider>
    <App />
  </BreakpointsProvider>
);

// in App.js
import { ShowAt, HideAt } from 'react-with-breakpoints';

const App = () => (
  <ShowAt breakpoint="mediumAndBelow">
    <div>Hello World!</div>
  </ShowAt>
  <HideAt breakpoint="mediumAndBelow">
    <div>Hola Mundo!</div>
  </HideAt>
);
```

## ⚡️ Component list
- `<BreakpointsProvider />`
- `<HideAt />`
- `<ShowAt />`

### `<BreakpointsProvider />`

BreakpointsProvider is taking advantage of the new React v16.3 Context API. It is a context provider and therefore it needs to be rendered on the top of your component tree. For more information about React v16.3's Context API please visit [this link](https://reactjs.org/docs/context.html).

See in an example how you can use it:

```jsx
// in index.js
import { BreakpointsProvider } from 'react-with-breakpoints';

const breakpoints = {
  small: 468,
  medium: 768,
  large: 1024,
  xlarge: Infinity,
}

const myApp = () => (
  <BreakpointsProvider breakpoints={ breakpoints }> // breakpoints prop is optional
    <App />
  </BreakpointsProvider>
);
```

**NOTE:**
As you can see in the example above, the `breakpoints` prop has been moved from HideAt and ShowAt to the BreakpointsProvider component. There is a disadvantage and an advantage of this. You can finally modify the breakpoints object at one place in your app, it became centralised. The disadvantage is that now you need to refactor your code if you manually set the breakpoints in your project if you used v2.

| Prop name | Type | Value | Default value | Description | Required |
| --------- | ---- | ----- | ------------- | ----------- | -------- |
| `breakpoints` | `Object` | `{ small: Number, medium: Number, large: Number, xlarge: Number }` | See it at [util/airbnbBreakpoints](util/airbnb-breakpoints.js): `{ small: 744, medium: 1128, large: 1440, xlarge: Infinity }` | Here you can override the default Airbnb breakpoints. It needs to be an object with a strict shape, which is shown at the value row. | `false` |

### `<HideAt />`

HideAt is a stateless function, which helps you make your DOM leaner. It hides its children, when the proper criterias are met.

Let’s see it in action:

```jsx
import { HideAt } from 'react-with-breakpoints';

const myApp = () => (
  <HideAt breakpoint="small">
    <div>Hello World!</div>
  </HideAt>
);
```

Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen width described as a text eg.: small) from BreakpointsProvider.

**NOTE:**
As HideAt and ShowAt function the same way (they do the opposite things of each other), they share the same props and prop-types.

| Prop name | Type | Value | Default value | Description | Required |
| --------- | ---- | ----- | ------------- | ----------- | -------- |
| `breakpoint` | `String` | Either one of these: `'small'`, `'medium'`, `'mediumAndBelow'`, `'mediumAndAbove'`, `'large'`, `'xlarge'` | - | You can set either one of the values to tell the component where to hide or show its children. | `true` |
| `currentBreakpoint` | `String` | Either one of these: `'small'`, `'medium'`, `'large'`, `'xlarge'` | - | It's used by withBreakpoints. Whenever there is a change with the breakpoints, the appropriate value will be passed down to HideAt or ShowAt. | `false` |

### `<ShowAt />`

ShowAt functions the opposite way as HideAt does. It reveals its children when the current breakpoint matches its breakpoint. (eg.: small, smallAndBelow)

As said above, ShowAt and HideAt share the same `props` and `propTypes`, so please look at the prop descriptions at HideAt.

```jsx
import { ShowAt } from 'react-with-breakpoints';

const myApp = () => (
  <ShowAt breakpoint="mediumAndBelow">
    <div>Hello World!</div>
  </ShowAt>
);
```

## 💪 Contributions

Although all kinds of contributions are welcome, I wouldn't mind having a system for them.
**Please follow the instructions below, if you’re about to work on this project!**

1. If you find something, that bothers you about these modules, or you could improve them, please submit a new issue [here](https://github.com/kristof0425/react-with-breakpoints/issues).
2. Fork react-with-breakpoints repository and create your changes in your repository.
3. Create a pull request with the appropriate issue’s number you created (or you found solvable) and put **Review needed** label on it, if you feel like done with your work.

After this I'll review it personally and hopefully merge it as well.

Happy coding! ☕️

## 👏 Story

I wrote a 4 min long story on Medium about what I learned along the way, when I created the first version of these three modules. It got published in [DailyJS](https://medium.com/dailyjs/i-open-sourced-3-modules-from-airbnb-614bc5a2a51d). 🤗

## ©️ Licence
MIT
