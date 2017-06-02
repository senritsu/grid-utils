import {allComponents} from '../helpers/components'
import {clone, withFlexibleSignature, assignComponentValue} from '../helpers/misc'

const extractValue = (v, character) => {
  switch (character) {
  case '0':
    return 0
  case '1':
    return 1
  case 'x':
  case 'y':
  case 'z':
  case 'w':
    return Array.isArray(v) ? v[allComponents.indexOf(character)] : v[character]
  default:
    throw new Error('invalid swizzling character')
  }
}

export const swizzle = withFlexibleSignature((v, description) => {
  const characters = description.replace('_', '').split('')

  // short-circuit for scalar value
  if (characters.length === 1) {
    return extractValue(v, characters[0])
  }

  if (!Array.isArray(v) && characters.length > 4) {
    throw new Error('swizzle expression out of bounds (max length 4) for object vector')
  }

  const result = Array.isArray(v)
    ? new Array(characters.length)
    : clone(v)

  allComponents.forEach(component => {
    assignComponentValue(result, component, undefined)
  })

  characters.forEach((character, i) => {
    const component = allComponents[i]
    const value = extractValue(v, character)

    if (Array.isArray(v)) {
      result[i] = value
    } else {
      assignComponentValue(result, component, value)
    }
  })

  return result
})
