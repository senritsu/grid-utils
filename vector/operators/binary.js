import {withFlexibleSignature} from '../helpers/misc'
import {definedComponents} from '../helpers/components'
import {zip, zipJagged, zipPipeline, reduce} from '../helpers/operators'

export const add = zip((a, b) => a + b)

export const subtract = zip((a, b) => a - b)

// hadamard product
export const multiply = zip((a, b) => a * b)

// hadamard division
export const divide = zip((a, b) => Math.round(a / b))
export const divideFloat = zip((a, b) => a / b)

export const equal = zipPipeline([
  zipJagged((a, b) => Math.abs(a - b) <= Number.EPSILON),
  reduce((totalEquality, componentEquality) => totalEquality && componentEquality, true)
])

export const power = zip((a, b) => Math.pow(a, b))

export const set = zipJagged((a, b) => b === undefined ? a : b)

export const dot = withFlexibleSignature((v1, v2) => { throw new Error('not implemented') })

export const cross = withFlexibleSignature((v1, v2) => { throw new Error('not implemented') })

// boolean operators

export const and = zip((a, b) => Number(a && b))

export const or = zip((a, b) => Number(a || b))
