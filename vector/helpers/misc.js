import Vector from '../prototype'
import {componentOrder, allComponents} from './components'

export const withInvertedCurryingSupport = f => {
  const curried = right => left => f(left, right)

  return (first, second) => {
    if (second === undefined) {
      // check for function to allow usage by the pipeline function
      if (Array.isArray(first) && first.length === 2 && !(first[0] instanceof Function) && !(first[0] instanceof Number)) {
        return f(first[0], first[1])
      }
      // curried form uses the given single parameter as the right value for the operation f
      return curried(first)
    }
    return f(first, second)
  }
}

export const skipUndefinedArguments = (f, defaultValue) => (a, b) => a === undefined || b === undefined
  ? defaultValue
  : f(a, b)

export const clone = v => {
  if (Array.isArray(v)) {
    const obj = Object.create(Vector.prototype)
    v.forEach((value, i) => {
      obj[allComponents[i]] = value
    })
    return [...v]
  }
  const prototype = Object.getPrototypeOf(v)
  return Object.assign(Object.create(prototype === Object.prototype ? Vector.prototype : prototype), v)
}
