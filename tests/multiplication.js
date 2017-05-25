import test from 'blue-tape'

import {multiply} from '../vector/simple-arithmetic'

test('multiplication: 2d vectors', t => {
  let v1 = {x: 2, y: 1}
  let v2 = {x: 3, y: 3}
  let expected = {x: 6, y: 3}
  t.same(multiply(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {x: 0, z: 0}
  expected = {x: 0, z: 0}
  t.same(multiply(v1, v2), expected)

  t.end()
})

test('multiplication: 3d vectors', t => {
  let v1 = {x: 0, y: 1, z: 2}
  let v2 = {x: 2, y: 1, z: 3}
  let expected = {x: 0, y: 1, z: 6}
  t.same(multiply(v1, v2), expected)

  t.end()
})

test('multiplication: strips out unmatched components', t => {
  let v1 = {x: 2, y: 2, z: 2}
  let v2 = {x: 2, z: 2}
  let expected = {x: 4, z: 4}
  t.same(multiply(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.same(multiply(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.same(multiply(v1, v2), expected)

  t.end()
})

test('multiplication: partial application', t => {
  const multiplyByDouble2DUnitVector = multiply({x: 2, y: 2})

  let v = {x: 0, y: 1}
  let expected = {x: 0, y: 2}

  t.same(multiplyByDouble2DUnitVector(v), expected)

  v = {x: 1, z: 1}
  expected = {x: 2}

  t.same(multiplyByDouble2DUnitVector(v), expected)

  v = {x: -1, y: -1}
  expected = {x: -2, y: -2}

  t.same(multiplyByDouble2DUnitVector(v), expected)

  t.end()
})
