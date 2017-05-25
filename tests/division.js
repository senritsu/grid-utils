import test from 'blue-tape'

import {divide} from '../vector/simple-arithmetic'

test('division: 2d vectors', t => {
  let v1 = {x: 4, y: 2}
  let v2 = {x: 2, y: 1}
  let expected = {x: 2, y: 2}
  t.same(divide(v1, v2), expected)

  v1 = {x: 2, z: 2}
  v2 = {x: 2, z: 2}
  expected = {x: 1, z: 1}
  t.same(divide(v1, v2), expected)

  t.end()
})

test('division: 3d vectors', t => {
  let v1 = {x: 0, y: 1, z: 4}
  let v2 = {x: 2, y: 1, z: 2}
  let expected = {x: 0, y: 1, z: 2}
  t.same(divide(v1, v2), expected)

  t.end()
})

test('division: strips out unmatched components', t => {
  let v1 = {x: 2, y: 2, z: 2}
  let v2 = {x: 2, z: 2}
  let expected = {x: 1, z: 1}
  t.same(divide(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.same(divide(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.same(divide(v1, v2), expected)

  t.end()
})

test('division: partial application', t => {
  const divideByDouble2DUnitVector = divide({x: 2, y: 2})

  let v = {x: 2, y: 4}
  let expected = {x: 1, y: 2}

  t.same(divideByDouble2DUnitVector(v), expected)

  v = {x: 2, z: 2}
  expected = {x: 1}

  t.same(divideByDouble2DUnitVector(v), expected)

  v = {x: -2, y: -2}
  expected = {x: -1, y: -1}

  t.same(divideByDouble2DUnitVector(v), expected)

  t.end()
})

test('division: division by zero', t => {
  let v1 = {x: 1, y: 2}
  let v2 = {x: 0, y: 0}
  let expected = {x: Infinity, y: Infinity}
  t.same(divide(v1, v2), expected)

  t.end()
})

test('division: rounding', t => {
  let v1 = {x: 1, y: 2}
  let v2 = {x: 3, y: 3}
  let expected = {x: 0, y: 1}
  t.same(divide(v1, v2), expected)

  v1 = {x: -5, z: 7}
  v2 = {x: 3, z: 3}
  expected = {x: -2, z: 2}
  t.same(divide(v1, v2), expected)

  v1 = {x: 1, z: 3}
  v2 = {x: 2, z: 2}
  expected = {x: 1, z: 2}
  t.same(divide(v1, v2), expected)

  t.end()
})
