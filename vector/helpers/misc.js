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

export const assignComponentValue = (v, component, value) => {
  if (Array.isArray(v)) {
    if (componentOrder[component] < v.length) {
      v[componentOrder[component]] = value
    }
  } else {
    if (value === undefined) {
      delete v[component]
    } else {
      v[component] = value
    }
  }
}

export const getScalarValue = (operand, component) => typeof operand === 'number'
  ? operand
  : Array.isArray(operand)
    ? operand[componentOrder[component]]
    : operand[component]

export const getArrayValue = (operand, component) => {
  if (Array.isArray(operand)) {
    if (Array.isArray(operand[componentOrder[component]])) {
      return operand[componentOrder[component]]
    } else if (!Array.isArray(operand[0])) {
      return operand
    }
  }
  return operand[component]
}

export const skipUndefinedArguments = (f, defaultValue) => (a, b) => a !== undefined && b !== undefined
  ? f(a, b)
  : defaultValue

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
