import {power, divideFloat} from './binary'
import {definedComponents} from '../helpers/components'
import {map, reduce, mapPipeline} from '../helpers/operators'

export const absolute = map(a => Math.abs(a))

export const square = power(2)

export const sum = reduce((sum, a) => sum + a)

export const magnitude = mapPipeline([square, sum, Math.sqrt])

export const normalize = v => divideFloat(v, magnitude(v))
