import {getArrayValue} from '../vector/helpers/components'
import {zip, zipPipeline} from '../vector/helpers/operators'
import {every} from '../vector/operators/unary'

const scalarWithinBounds = (a, bounds) => a >= bounds[0] && a <= bounds[1]

export const within = zipPipeline([
  zip(scalarWithinBounds, getArrayValue),
  every
])
