import {zipPipeline} from '../helpers/operators'
import {sum, absolute, square} from './unary'
import {subtract} from './binary'

export const manhattan = zipPipeline([subtract, absolute, sum])
export const euclidean = zipPipeline([subtract, square, sum, Math.sqrt])

export const distance = euclidean
