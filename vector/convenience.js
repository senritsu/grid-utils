import {wrapBinaryOperator, componentWise} from './helpers'

export const set = wrapBinaryOperator(componentWise((a, b) => b === undefined ? a : b))
