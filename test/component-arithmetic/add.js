import test from 'ava'

import {add} from '../../vector/operators/binary'

test('2d vectors', t => {
  let v1 = {x: 0, y: 1}
  let v2 = {x: 2, y: 1}
  let expected = {x: 2, y: 2}
  t.deepEqual(add(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {x: 0, z: 0}
  expected = {x: 1, z: 1}
  t.deepEqual(add(v1, v2), expected)
})

test('3d vectors', t => {
  let v1 = {x: 0, y: 1, z: 2}
  let v2 = {x: 2, y: 1, z: 0}
  let expected = {x: 2, y: 2, z: 2}
  t.deepEqual(add(v1, v2), expected)
})

test('scalars', t => {
  let v1 = {x: 0, y: 1}
  let s = 2
  let expected = {x: 2, y: 3}
  t.deepEqual(add(v1, s), expected)

  v1 = {x: 1, z: 1}
  s = -1
  expected = {x: 0, z: 0}
  t.deepEqual(add(v1, s), expected)
})

test('strips out unmatched components', t => {
  let v1 = {x: 1, y: 1, z: 1}
  let v2 = {x: 1, z: 1}
  let expected = {x: 2, z: 2}
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

  let v = {x: 0, y: 1}
  let expected = {x: 1, y: 2}

  t.deepEqual(add2DUnitVector(v), expected)

  v = {x: 1, z: 1}
  expected = {x: 2}

  t.deepEqual(add2DUnitVector(v), expected)

  v = {x: -1, y: -1}
  expected = {x: 0, y: 0}

  t.deepEqual(add2DUnitVector(v), expected)
})
