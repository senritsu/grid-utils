import {power, divideFloat} from './binary'
import {definedComponents} from '../helpers/components'
import {map, reduce, pipeline} from '../helpers/operators'

export const absolute = map(a => Math.abs(a))

export const square = power(2)

export const sum = reduce((sum, a) => sum + a)

export const magnitude = pipeline([square, sum, Math.sqrt])

export const normalize = v => divideFloat(v, magnitude(v))

// boolean operators

export const every = reduce((combined, value) => Boolean(combined && value), true)

export const some = reduce((combined, value) => Boolean(combined || value), false)
