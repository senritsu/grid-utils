import {definedComponents} from './components'
import {
  clone,
  assignOrDelete,
  getScalarValue,
  withFlexibleSignature,
  skipUndefinedArguments
} from './misc'

// f: component => scalar
const mapComponents = (v, f) => {
  const result = clone(v)

  definedComponents(result).forEach(component => {
    assignOrDelete(result, component, f(component))
  })

  return result
}

// f: scalar => scalar
export const map = f => v =>
  mapComponents(v, component => f(v[component]))

export const mapPipeline = functions => v =>
  pipeline(v, functions)

// f: scalar => scalar => scalar
// f: array of zip operators
export const zipJagged = f => withFlexibleSignature((v, right) =>
  mapComponents(v, component => f(v[component], getScalarValue(right, component)))
)
export const zip = f => zipJagged(skipUndefinedArguments(f))

export const zipPipeline = functions =>
  withFlexibleSignature((v, right) => pipeline([v, right], functions))

// f: scalar => scalar
export const reduce = (f, seed = 0) => v =>
  definedComponents(v).reduce((aggregate, component) => f(aggregate, v[component]), seed)

export const pipeline = withFlexibleSignature((value, functions) =>
  functions.reduce((current, f) => f(current), value)
)
