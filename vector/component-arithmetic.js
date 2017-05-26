import {curryWrap, curriedComponentWise} from './helpers'

export const add = curriedComponentWise((a, b) => a + b)

export const subtract = curriedComponentWise((a, b) => a - b)

// hadamard product
export const multiply = curriedComponentWise((a, b) => a * b)

// hadamard division
export const divide = curriedComponentWise((a, b) => Math.round(a / b))

export const equal = curryWrap((v, operand) => {
  return typeof operand === 'number'
    ? v.x === operand && v.y === operand && v.z === operand
    : v.x === operand.x && v.y === operand.y && v.z === operand.z
})
