<p align="center">
  <img src="./assets/logo-with-text.png" />
</p>

# react-with-breakpoints

[![Build Status](https://travis-ci.org/kristof0425/react-with-breakpoints.svg?branch=master)](https://travis-ci.org/kristof0425/react-with-breakpoints)

> Build leaner webpages with `react-with-breakpoints` like Airbnb. 👌

📖 [Documenation page]()

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
    <ShowAt breakpoint=“mediumAndBelow">
      <div>Hello World!</div>
    </ShowAt>
    <HideAt breakpoint=“mediumAndBelow">
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
  <HideAt breakpoint=“small">
    <div>Hello World!</div>
  </HideAt>
);
```

Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen wdith described as a text eg.: small) from withBreakpoints.

**NOTE:**
As HideAt and ShowAt function the same way (they do the opposite things of each other), they share the same props and prop-types.

| Prop name | Type | Value | Default value | Description | Required |
| --------- | ---- | ----- | ------------- | ----------- | -------- |
| `breakpoint` | `String` | Either one of these: `'small'`, `'mediium'`, `'mediumAndBelow'`, `'mediumAndAbove'`, `'large'` | - | You can set either one of the values to tell the component where to hide or show its children. | `true` |
| `breakpoints` | `Object` | `{ small: Number, medium: Number, large: Number }` | See it at [util/airbnbBreakpoints](util/airbnb-breakpoints.js): ```
{
  small: 744
  medium: 1128
  large: Infinity
}
``` | Here you can override the default Airbnb breakpoints. It needs to be an object with a strict shape, which is shown at the value row. | `false` |
| `currentBreakpoint` | `String` | Either one of these: `'small'`, `'mediium'`, `'large'` | It's used by withBreakpoint. Whenever there is a change with the breakpoints, the appropriate value will be passed down to HideAt or ShowAt. | `false` |

### `<ShowAt />`

## 💪 Contributions

If you'd like to help, feel free to post an issue and have a discussion about your suggestions!

## 👏 Story

**Skip this section, if you aren't interested.**

As I was reading Adam Neary's article of [Rearchitecting Airbnb’s Frontend](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2), two components caught my attention as a junior frontend developer. These were `HideAt` and `ShowAt`, these components seemed to me easy to 'reverse engineer' 🤓 for a rookie like me, but as it turned I needed to create a HOC as well to be able to share the above two with you, the react community. [Airbnb's website](https://aribnb.com) and the [React dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) helped me with inspiration along the way.

## ©️ Licence
MIT
