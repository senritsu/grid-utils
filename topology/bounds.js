import {getArrayValue} from '../vector/util/components'
import {zip, zipPipeline} from '../vector/util/operators'
import {every} from '../vector/operators/unary'

const scalarWithinBounds = (a, bounds) => a >= bounds[0] && a <= bounds[1]

export const within = zipPipeline([
  zip(scalarWithinBounds, getArrayValue),
  every
])
