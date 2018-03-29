import test from 'ava'

import {set} from './binary'

let v1, v2, v, s, expected

test('vector of same structure', t => {
  v1 = {x: 0, y: 0}
  v2 = {x: 1, y: 2}
  expected = {x: 1, y: 2}
  t.deepEqual(set(v1, v2), expected)
})

test('sparse vector', t => {
  v1 = {x: 0, y: 0}
  v2 = {x: 1}
  expected = {x: 1, y: 0}
  t.deepEqual(set(v1, v2), expected)

  v1 = {x: 0, z: 0}
  v2 = {x: 1, y: 1}
  expected = {x: 1, z: 0}
  t.deepEqual(set(v1, v2), expected)
})

test('scalar', t => {
  v = {x: 0, y: 0}
  s = 2
  expected = {x: 2, y: 2}
  t.deepEqual(set(v, s), expected)

  v = {x: 0, y: 1, z: 2}
  s = 3
  expected = {x: 3, y: 3, z: 3}
  t.deepEqual(set(v, s), expected)
})
