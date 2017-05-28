import {allComponents} from '../helpers/components'
import {clone, withFlexibleSignature, assignOrDelete} from '../helpers/misc'

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
    return v[character]
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

  if (characters.length > 4) {
    throw new Error('swizzle expression out of bounds (max length 4)')
  }

  const result = clone(v)

  allComponents.forEach(component => {
    delete result[component]
  })

  characters.forEach((character, i) => {
    const component = allComponents[i]
    const value = extractValue(v, character)

    if (value !== undefined) {
      result[component] = value
    }
  })

  return result
})
