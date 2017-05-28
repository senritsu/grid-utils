import Vector from '../prototype'

export const withFlexibleSignature = f => {
  const curried = right => left => f(left, right)

  return (left, right) => {
    if (right === undefined) {
      // check for function to allow usage by the pipeline function
      if (Array.isArray(left) && left.length === 2 && !(left[0] instanceof Function)) {
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
  : operand[component]

export const skipUndefinedArguments = (f, defaultValue) => (a, b) => a !== undefined && b !== undefined
  ? f(a, b)
  : defaultValue

export const clone = v => {
  const prototype = Object.getPrototypeOf(v)
  return Object.assign(Object.create(prototype === Object.prototype ? Vector.prototype : prototype), v)
}
