import {withInvertedCurryingSupport} from '../util/misc'
import {definedComponents} from '../util/components'
import {zip, zipJagged, zipPipeline, reduce} from '../util/operators'

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

export const dot = withInvertedCurryingSupport((v1, v2) => { throw new Error('not implemented') })

export const cross = withInvertedCurryingSupport((v1, v2) => { throw new Error('not implemented') })

// boolean operators

export const and = zip((a, b) => Number(a && b))

export const or = zip((a, b) => Number(a || b))
