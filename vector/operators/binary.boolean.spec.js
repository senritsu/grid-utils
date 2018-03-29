import test from 'ava'

import {and, or} from './binary'

let v1, v2, v, s, expected

test('and', t => {
  v1 = {x: 1, y: 0}
  v2 = {x: 1, y: 1}
  expected = {x: 1, y: 0}
  t.deepEqual(and(v1, v2), expected)

  v1 = {x: 1, y: 1}
  v2 = {x: 0, y: 1, z: 1}
  expected = {x: 0, y: 1}
  t.deepEqual(and(v1, v2), expected)

  v1 = {x: 0, y: 1}
  v2 = {x: 0, y: 0}
  expected = {x: 0, y: 0}
  t.deepEqual(and(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {y: 1, z: 1}
  expected = {z: 1}
  t.deepEqual(and(v1, v2), expected)

  v = {x: 1, y: 0}
  s = 1
  expected = {x: 1, y: 0}
  t.deepEqual(and(v, s), expected)
})

test('or', t => {
  v1 = {x: 1, y: 0}
  v2 = {x: 1, y: 1}
  expected = {x: 1, y: 1}
  t.deepEqual(or(v1, v2), expected)

  v1 = {x: 1, y: 1}
  v2 = {x: 0, y: 1, z: 1}
  expected = {x: 1, y: 1}
  t.deepEqual(or(v1, v2), expected)

  v1 = {x: 0, y: 1}
  v2 = {x: 0, y: 0}
  expected = {x: 0, y: 1}
  t.deepEqual(or(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {y: 1, z: 1}
  expected = {z: 1}
  t.deepEqual(or(v1, v2), expected)

  v = {x: 1, y: 0}
  s = 0
  expected = {x: 1, y: 0}
  t.deepEqual(or(v, s), expected)
})
