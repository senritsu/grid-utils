import {componentSum, curryWrap, componentWise} from './helpers'

const abs = componentWise((a, b) => Math.abs(a - b))
export const manhattan = curryWrap((v1, v2) => componentSum(abs(v1, v2)))

const squareDifference = componentWise((a, b) => Math.pow(a - b, 2))

export const euclidean = curryWrap((v1, v2) => Math.sqrt(componentSum(squareDifference(v1, v2))))
export const distance = euclidean
