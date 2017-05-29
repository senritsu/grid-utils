import Vector from '../prototype'
import {componentOrder, allComponents} from './components'

export const withFlexibleSignature = f => {
  const curried = right => left => f(left, right)

  return (left, right) => {
    if (right === undefined) {
      // check for function to allow usage by the pipeline function
      if (Array.isArray(left) && left.length === 2 && !(left[0] instanceof Function) && !(left[0] instanceof Number)) {
        return f(left[0], left[1])
      }
      return curried(left)
    }
    return f(left, right)
  }
}

export const assignOrDelete = (v, key, value) => {
  if (value === undefined) {
    delete v[key]
  } else {
    v[key] = value
  }
}

export const getScalarValue = (operand, component) => typeof operand === 'number'
  ? operand
  : Array.isArray(operand) && typeof Array[componentOrder[component]] === 'number'
    ? operand[componentOrder[component]]
    : operand[component]

export const getArrayValue = (operand, component) => Array.isArray(operand)
  ? operand
  : operand[component]

export const skipUndefinedArguments = (f, defaultValue) => (a, b) => a !== undefined && b !== undefined
  ? f(a, b)
  : defaultValue

export const clone = v => {
  if (Array.isArray(v)) {
    const obj = Object.create(Vector.prototype)
    v.forEach((value, i) => {
      obj[allComponents[i]] = value
    })
    return obj
  }
  const prototype = Object.getPrototypeOf(v)
  return Object.assign(Object.create(prototype === Object.prototype ? Vector.prototype : prototype), v)
}
