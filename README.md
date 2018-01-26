<p align="center">
  <img src="./assets/logo-with-text.png" />
</p>

# react-with-breakpoints

[![Build Status](https://travis-ci.org/kristof0425/react-with-breakpoints.svg?branch=master)](https://travis-ci.org/kristof0425/react-with-breakpoints)
[![Coverage Status](https://coveralls.io/repos/github/kristof0425/react-with-breakpoints/badge.svg?branch=master)](https://coveralls.io/github/kristof0425/react-with-breakpoints?branch=master)

> Build leaner webpages with `react-with-breakpoints` like Airbnb. 👌

📖 [Documenation page](https://kristof0425.github.io/react-with-breakpoints/)

## 🔧 Install

```bash
npm install react-with-breakpoints

# or use yarn

yarn add react-with-breakpoints
```

## 👈 Usage

```jsx
import { ShowAt, HideAt } from 'react-with-breakpoints';

const myApp = () => (
  <div>
    <ShowAt breakpoint="mediumAndBelow">
      <div>Hello World!</div>
    </ShowAt>
    <HideAt breakpoint="mediumAndBelow">
      <div>Hola Mundo!</div>
    </HideAt>
  </div>
);
```

## ⚡️ Component list
- `withBreakpoints`
- `<HideAt />`
- `<ShowAt />`

### `withBreakpoints`

It’s a [HOC](https://reactjs.org/docs/higher-order-components.html) (higher order component), responsible for adding the scroll event listener and passing down the current breakpoint as a prop to its child.

See in an example how you can use it:

```jsx
import { withBreakpoints } from 'react-with-breakpoints';

// just like in the source of HideAt,
// you can put any component
// as an argument of withBreakpoints

const HelloWorld = () => <div>Hello World!</div>;

const helloWithBreakpoints = withBreakpoints(HelloWorld);

export default helloWithBreakpoints;
```

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

Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen wdith described as a text eg.: small) from withBreakpoints.

**NOTE:**
As HideAt and ShowAt function the same way (they do the opposite things of each other), they share the same props and prop-types.

| Prop name | Type | Value | Default value | Description | Required |
| --------- | ---- | ----- | ------------- | ----------- | -------- |
| `breakpoint` | `String` | Either one of these: `'small'`, `'medium'`, `'mediumAndBelow'`, `'mediumAndAbove'`, `'large'` | - | You can set either one of the values to tell the component where to hide or show its children. | `true` |
| `breakpoints` | `Object` | `{ small: Number, medium: Number, large: Number }` | See it at [util/airbnbBreakpoints](util/airbnb-breakpoints.js): `{ small: 744, medium: 1128, large: Infinity }` | Here you can override the default Airbnb breakpoints. It needs to be an object with a strict shape, which is shown at the value row. | `false` |
| `currentBreakpoint` | `String` | Either one of these: `'small'`, `'medium'`, `'large'` | - | It's used by withBreakpoints. Whenever there is a change with the breakpoints, the appropriate value will be passed down to HideAt or ShowAt. | `false` |

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
3. Create a pull request with the appropriate issue’s number you created (or you found solveable) and put **Review needed** label on it, if you feel like done with your work.

After this I'll review it personally and hopefully merge it as well.

Happy coding! ☕️

## 👏 Story

I wrote a 4 min long story on Medium about what I learned along the way, when I created the first version of these three modules. It got published in [DailyJS](https://medium.com/dailyjs/i-open-sourced-3-modules-from-airbnb-614bc5a2a51d). 🤗

## ©️ Licence
MIT
