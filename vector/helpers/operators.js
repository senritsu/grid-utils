import {definedComponents} from './components'
import {
  clone,
  assignOrDelete,
  getScalarValue,
  withFlexibleSignature,
  skipUndefinedArguments
} from './misc'

// f: [scalar => ] scalar => scalar
// getValue: component => vector => object
const unaryComponentFunction = (f, getValue) => (left, right) => component =>
  f(getValue(left, component))
const binaryComponentFunction = (f, getValue) => (left, right) => component =>
  f(getValue(left, component), getValue(right, component))

// f: component => scalar
const mapComponents = (v, f) => {
  const result = clone(v)

  definedComponents(v).forEach(component => {
    assignOrDelete(result, component, f(component))
  })

  return result
}

// f: scalar => scalar
export const map = (f, getValue) => {
  f = unaryComponentFunction(f, getValue || getScalarValue)
  return v => mapComponents(v, f(v))
}

export const mapPipeline = functions => v =>
  pipeline(v, functions)

// f: scalar => scalar => scalar
export const zipJagged = (f, getValue) => {
  f = binaryComponentFunction(f, getValue || getScalarValue)
  return withFlexibleSignature((v, right) => mapComponents(v, f(v, right)))
}
export const zip = (f, getValue) => zipJagged(skipUndefinedArguments(f), getValue)

export const zipPipeline = functions =>
  withFlexibleSignature((v, right) => pipeline([v, right], functions))

// f: scalar => scalar
export const reduce = (f, seed = 0) => v =>
  definedComponents(v).reduce((aggregate, component) => f(aggregate, v[component]), seed)

export const pipeline = withFlexibleSignature((value, functions) =>
  functions.reduce((current, f) => f(current), value)
)
