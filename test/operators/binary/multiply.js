import test from 'ava'

import {multiply} from '../../../vector/operators/binary'

let v1, v2, v, s, expected

test('2d vectors', t => {
  v1 = {x: 2, y: 1}
  v2 = {x: 3, y: 3}
  expected = {x: 6, y: 3}
  t.deepEqual(multiply(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {x: 0, z: 0}
  expected = {x: 0, z: 0}
  t.deepEqual(multiply(v1, v2), expected)
})

test('3d vectors', t => {
  v1 = {x: 0, y: 1, z: 2}
  v2 = {x: 2, y: 1, z: 3}
  expected = {x: 0, y: 1, z: 6}
  t.deepEqual(multiply(v1, v2), expected)
})

test('scalars', t => {
  v = {x: 2, y: 5}
  s = 3
  expected = {x: 6, y: 15}
  t.deepEqual(multiply(v, s), expected)

  v = {x: -1, z: 1}
  s = -2
  expected = {x: 2, z: -2}
  t.deepEqual(multiply(v, s), expected)
})

test('strips out unmatched components', t => {
  v1 = {x: 2, y: 2, z: 2}
  v2 = {x: 2, z: 2}
  expected = {x: 4, z: 4}
  t.deepEqual(multiply(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.deepEqual(multiply(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.deepEqual(multiply(v1, v2), expected)
})

test('partial application', t => {
  const multiplyByDouble2DUnitVector = multiply({x: 2, y: 2})

  v = {x: 0, y: 1}
  expected = {x: 0, y: 2}

  t.deepEqual(multiplyByDouble2DUnitVector(v), expected)

  v = {x: 1, z: 1}
  expected = {x: 2}

  t.deepEqual(multiplyByDouble2DUnitVector(v), expected)

  v = {x: -1, y: -1}
  expected = {x: -2, y: -2}

  t.deepEqual(multiplyByDouble2DUnitVector(v), expected)
})
