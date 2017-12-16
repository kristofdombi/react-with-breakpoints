export default function (breakpoints = [], breakpoint = '', isHideAt = true) {
  let shouldRender = true;
  // eslint-disable-next-line
  !isHideAt && (shouldRender = false);
  // eslint-disable-next-line array-callback-return
  breakpoints.map(b => {
    // eslint-disable-next-line
    breakpoint === b && (shouldRender = isHideAt ? false : true);
  });
  return shouldRender;
}
