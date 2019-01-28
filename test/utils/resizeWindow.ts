export default function(to: number): void {
  // @ts-ignore
  window.innerWidth = to - 1
  window.dispatchEvent(new Event('resize'))
}
