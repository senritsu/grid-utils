import test from 'blue-tape'

import {set, normalize} from '../vector/convenience'

test('convenience: set vector of same structure', t => {
  let v1 = {x: 0, y: 0}
  let v2 = {x: 1, y: 2}
  let expected = {x: 1, y: 2}
  t.same(set(v1, v2), expected)

  t.end()
})

test('convenience: set sparse vector', t => {
  let v1 = {x: 0, y: 0}
  let v2 = {x: 1}
  let expected = {x: 1, y: 0}
  t.same(set(v1, v2), expected)

  v1 = {x: 0, z: 0}
  v2 = {x: 1, y: 1}
  expected = {x: 1, z: 0}
  t.same(set(v1, v2), expected)

  t.end()
})

test('convenience: set scalar', t => {
  let v1 = {x: 0, y: 0}
  let s = 2
  let expected = {x: 2, y: 2}
  t.same(set(v1, s), expected)

  v1 = {x: 0, y: 1, z: 2}
  s = 3
  expected = {x: 3, y: 3, z: 3}
  t.same(set(v1, s), expected)

  t.end()
})
