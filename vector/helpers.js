import Vector from './prototype'

export const allComponents = ['x', 'y', 'z']

export const definedComponents = v =>
  allComponents.filter(component => typeof v[component] === 'number')

export const componentSum = v => definedComponents(v).reduce((sum, component) => sum + v[component], 0)

export const curryWrap = f => (v1, v2) => {
  if (v2 === undefined) {
    return v2 => f(v2, v1)
  }
  return f(v1, v2)
}

export const componentWise = (f) => {
  f = maybeCall(f)

  return (v, operand) => {
    const prototype = Object.getPrototypeOf(v)
    const result = Object.create(prototype === Object.prototype ? Vector.prototype : prototype)

    allComponents.forEach(component => {
      maybeAssign(
        result,
        component,
        f(v[component], typeof operand === 'number' ? operand : operand[component])
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

export const maybeCall = (f, defaultValue) => (a, b) => a !== undefined && b !== undefined
  ? f(a, b)
  : defaultValue

export const curriedComponentWise = f => curryWrap(componentWise(f))
