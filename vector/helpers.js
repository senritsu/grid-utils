import Vector from './prototype'

export const wrapBinaryOperator = f => {
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

export const pipeline = wrapBinaryOperator((value, functions) => functions.reduce((current, f) => f(current), value))

export const allComponents = ['x', 'y', 'z']

export const definedComponents = v =>
  allComponents.filter(component => typeof v[component] === 'number')


export const componentSum = v => definedComponents(v).reduce((sum, component) => sum + v[component], 0)

export const componentWise = f => {
  return (v, operand) => {
    const prototype = Object.getPrototypeOf(v)
    const result = Object.create(prototype === Object.prototype ? Vector.prototype : prototype)

    definedComponents(v).forEach(component => {
      maybeAssign(
        result,
        component,
        f(v[component], typeof operand === 'number'
          ? operand
          : operand !== undefined
            ? operand[component]
            : undefined)
      )
    })

    return result
  }
}

export const maybeAssign = (v, key, value) => {
  if (value === undefined) {
    delete v[key]
  } else {
    v[key] = value
  }
}

export const skipUndefinedArguments = (f, defaultValue) => (a, b) => a !== undefined && b !== undefined
  ? f(a, b)
  : defaultValue

export const curriedComponentWise = pipeline([skipUndefinedArguments, componentWise, wrapBinaryOperator])
