import {componentSum, wrapBinaryOperator, componentWise, curriedComponentWise, pipeline} from './helpers'
import {subtract, square} from './component-arithmetic'

const absoluteDifference = curriedComponentWise((a, b) => Math.abs(a - b))
export const manhattan = wrapBinaryOperator(
  (v1, v2) => pipeline(v1, [absoluteDifference(v2), componentSum])
)

export const euclidean = wrapBinaryOperator(
  (v1, v2) => pipeline(v1, [subtract(v2), square, componentSum, Math.sqrt])
)

export const distance = euclidean
