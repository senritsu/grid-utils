import {curryWrap, pipeline} from './helpers'
import {divide, componentSum, subtract, square} from './component-arithmetic'

export const dot = curryWrap((v1, v2) => { throw new Error('not implemented') })

export const cross = curryWrap((v1, v2) => { throw new Error('not implemented') })

export const magnitude = v => pipeline(v, [square, componentSum, Math.sqrt])

export const normalize = v => {
  throw new Error('not implemented: only integer division at the moment, needs float division')
  return divide(v, magnitude(v))
}
