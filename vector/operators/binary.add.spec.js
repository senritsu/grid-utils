import test from 'ava'

import {add} from './binary'

let v1, v2, v, s, expected

test('2d vectors', t => {
  v1 = {x: 0, y: 1}
  v2 = {x: 2, y: 1}
  expected = {x: 2, y: 2}
  t.deepEqual(add(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {x: 0, z: 0}
  expected = {x: 1, z: 1}
  t.deepEqual(add(v1, v2), expected)
})

test('3d vectors', t => {
  v1 = {x: 0, y: 1, z: 2}
  v2 = {x: 2, y: 1, z: 0}
  expected = {x: 2, y: 2, z: 2}
  t.deepEqual(add(v1, v2), expected)
})

test('array vectors', t => {
  v1 = [1, 1]
  v2 = {x: 0, y: 0}
  expected = [1, 1]
  t.deepEqual(add(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = [0, 0]
  expected = {x: 1}
  t.deepEqual(add(v1, v2), expected)

  v1 = [1, 1]
  v2 = [0, 0, 1]
  expected = [1, 1]
  t.deepEqual(add(v1, v2), expected)
})

test('scalars', t => {
  v = {x: 0, y: 1}
  s = 2
  expected = {x: 2, y: 3}
  t.deepEqual(add(v, s), expected)

  v = {x: 1, z: 1}
  s = -1
  expected = {x: 0, z: 0}
  t.deepEqual(add(v, s), expected)
})

test('strips out unmatched components', t => {
  v1 = {x: 1, y: 1, z: 1}
  v2 = {x: 1, z: 1}
  expected = {x: 2, z: 2}
  t.deepEqual(add(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.deepEqual(add(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.deepEqual(add(v1, v2), expected)
})

test('partial application', t => {
  const add2DUnitVector = add({x: 1, y: 1})

  v = {x: 0, y: 1}
  expected = {x: 1, y: 2}

  t.deepEqual(add2DUnitVector(v), expected)

  v = {x: 1, z: 1}
  expected = {x: 2}

  t.deepEqual(add2DUnitVector(v), expected)

  v = {x: -1, y: -1}
  expected = {x: 0, y: 0}

  t.deepEqual(add2DUnitVector(v), expected)
})
