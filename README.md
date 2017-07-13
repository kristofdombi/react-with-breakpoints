# react-with-breakpoint

Build leaner webpages with `react-with-breakpoint`. 👌

## Background story

*Skip this section, if you aren't interested. See you at the technical details. 😉*

As I was reading Adam Neary's article of [Rearchitecting Airbnb’s Frontend](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2), two components caught my attention as a junior frontend developer. These were `HideAt` and `ShowAt`, these components seemed to me easy to 'reverse engineer' 🤓 for a rookie like me, but as it turned I needed to create a HOC as well to be able to share the above two with you, the react community. [Airbnb's website][https://aribnb.com] and the [React dev tool][https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi] helped me with inspiration along the way.

`react-with-breakpoint` is the parent of `HideAt` and `ShowAt`, a higher order component.
