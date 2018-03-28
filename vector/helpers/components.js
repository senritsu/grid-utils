export const allComponents = ['x', 'y', 'z', 'w']

export const componentOrder = {
  x: 0,
  y: 1,
  z: 2,
  w: 3
}

export const definedComponents = v => Array.isArray(v)
  ? allComponents.slice(0, v.length)
  : allComponents.filter(component => v[component] !== undefined)

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
