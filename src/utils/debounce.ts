import Timeout = NodeJS.Timeout

const debounce = (func: Function, interval: number) => {
  let timeout: Timeout | null
  return (...args: any) => {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, interval)
  }
}

export default debounce
