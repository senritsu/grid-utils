import test from 'ava'

import {definedComponents} from '../vector/helpers/components'

let v, expected

test('defined components (object)', t => {
  v = {x: 1, y: 1}
  expected = ['x', 'y']
  t.deepEqual(definedComponents(v), expected)

  v = {x: 1, z: 1}
  expected = ['x', 'z']
  t.deepEqual(definedComponents(v), expected)

  v = {y: 1, z: 1, w: 2}
  expected = ['y', 'z', 'w']
  t.deepEqual(definedComponents(v), expected)

  v = {y: 1, z: 1, w: 2, asdf: 2}
  expected = ['y', 'z', 'w']
  t.deepEqual(definedComponents(v), expected)
})

test('defined components (array)', t => {
  v = [1, 1]
  expected = ['x', 'y']
  t.deepEqual(definedComponents(v), expected)

  v = [1, 1, 1, 1]
  expected = ['x', 'y', 'z', 'w']
  t.deepEqual(definedComponents(v), expected)
})
