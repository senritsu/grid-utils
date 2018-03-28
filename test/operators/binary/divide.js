import test from 'ava'

import {divide} from '../../../vector/operators/binary'

let v1, v2, v, s, expected

test('2d vectors', t => {
  v1 = {x: 4, y: 2}
  v2 = {x: 2, y: 1}
  expected = {x: 2, y: 2}
  t.deepEqual(divide(v1, v2), expected)

  v1 = {x: 2, z: 2}
  v2 = {x: 2, z: 2}
  expected = {x: 1, z: 1}
  t.deepEqual(divide(v1, v2), expected)
})

test('3d vectors', t => {
  v1 = {x: 0, y: 1, z: 4}
  v2 = {x: 2, y: 1, z: 2}
  expected = {x: 0, y: 1, z: 2}
  t.deepEqual(divide(v1, v2), expected)
})

test('scalars', t => {
  v = {x: 2, y: 5}
  s = 2
  expected = {x: 1, y: 3}
  t.deepEqual(divide(v, s), expected)

  v = {x: -1, z: 1}
  s = -2
  expected = {x: 1, z: -0}
  t.deepEqual(divide(v, s), expected)
})

test('strips out unmatched components', t => {
  v1 = {x: 2, y: 2, z: 2}
  v2 = {x: 2, z: 2}
  expected = {x: 1, z: 1}
  t.deepEqual(divide(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.deepEqual(divide(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.deepEqual(divide(v1, v2), expected)
})

test('partial application', t => {
  const divideByDouble2DUnitVector = divide({x: 2, y: 2})

  v = {x: 2, y: 4}
  expected = {x: 1, y: 2}

  t.deepEqual(divideByDouble2DUnitVector(v), expected)

  v = {x: 2, z: 2}
  expected = {x: 1}

  t.deepEqual(divideByDouble2DUnitVector(v), expected)

  v = {x: -2, y: -2}
  expected = {x: -1, y: -1}

  t.deepEqual(divideByDouble2DUnitVector(v), expected)
})

test('division by zero', t => {
  v1 = {x: 1, y: 2}
  v2 = {x: 0, y: 0}
  expected = {x: Infinity, y: Infinity}
  t.deepEqual(divide(v1, v2), expected)
})

test('rounding', t => {
  v1 = {x: 1, y: 2}
  v2 = {x: 3, y: 3}
  expected = {x: 0, y: 1}
  t.deepEqual(divide(v1, v2), expected)

  v1 = {x: -5, z: 7}
  v2 = {x: 3, z: 3}
  expected = {x: -2, z: 2}
  t.deepEqual(divide(v1, v2), expected)

  v1 = {x: 1, z: 3}
  v2 = {x: 2, z: 2}
  expected = {x: 1, z: 2}
  t.deepEqual(divide(v1, v2), expected)
})

test.todo('float division')
