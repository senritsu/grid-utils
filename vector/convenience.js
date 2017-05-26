import {curryWrap, componentWise} from './helpers'

export const set = curryWrap(componentWise((a, b) => b === undefined ? a : b))
