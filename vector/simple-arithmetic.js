const curryWrap = f => {
  return (v1, v2) => {
    if (v2 === undefined) {
      return v2 => f(v2, v1)
    }
    return f(v1, v2)
  }
}

const componentWise = f => (v1, v2) => {
  const {x: x1, y: y1, z: z1} = v1
  const {x: x2, y: y2, z: z2} = v2
  const result = Object.assign({}, v1)
  if (x1 !== undefined && x2 !== undefined) {
    result.x = f(x1, x2)
  } else {
    delete result.x
  }
  if (y1 !== undefined && y2 !== undefined) {
    result.y = f(y1, y2)
  } else {
    delete result.y
  }
  if (z1 !== undefined && z2 !== undefined) {
    result.z = f(z1, z2)
  } else {
    delete result.z
  }
  return result
}

const curryWrapComponentWise = f => curryWrap(componentWise(f))

export const add = curryWrapComponentWise((a, b) => a + b)

export const subtract = curryWrapComponentWise((a, b) => a - b)

// hadamard product
export const multiply = curryWrapComponentWise((a, b) => a * b)

// hadamard division
export const divide = curryWrapComponentWise((a, b) => Math.round(a / b))

const bothUndefinedOrEqual = (a, b) => a === undefined && b === undefined ? true : a === b
export const equal = curryWrap((v1, v2) => {
  return bothUndefinedOrEqual(v1.x, v2.x) &&
    bothUndefinedOrEqual(v1.y, v2.y) &&
    bothUndefinedOrEqual(v1.z, v2.z)
})
