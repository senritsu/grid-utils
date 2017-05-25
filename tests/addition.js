import test from 'blue-tape'

import {add} from '../vector/simple-arithmetic'

test('addition: 2d vectors', t => {
  let v1 = {x: 0, y: 1}
  let v2 = {x: 2, y: 1}
  let expected = {x: 2, y: 2}
  t.same(add(v1, v2), expected)

  v1 = {x: 1, z: 1}
  v2 = {x: 0, z: 0}
  expected = {x: 1, z: 1}
  t.same(add(v1, v2), expected)

  t.end()
})

test('addition: 3d vectors', t => {
  let v1 = {x: 0, y: 1, z: 2}
  let v2 = {x: 2, y: 1, z: 0}
  let expected = {x: 2, y: 2, z: 2}
  t.same(add(v1, v2), expected)

  t.end()
})

test('addition: strips out unmatched components', t => {
  let v1 = {x: 1, y: 1, z: 1}
  let v2 = {x: 1, z: 1}
  let expected = {x: 2, z: 2}
  t.same(add(v1, v2), expected)

  v1 = {x: 1, y: 1, z: 1}
  v2 = {}
  expected = {}
  t.same(add(v1, v2), expected)

  v1 = {}
  v2 = {x: 1, y: 1, z: 1}
  expected = {}
  t.same(add(v1, v2), expected)

  t.end()
})

test('addition: partial application', t => {
  const add2DUnitVector = add({x: 1, y: 1})

  let v = {x: 0, y: 1}
  let expected = {x: 1, y: 2}

  t.same(add2DUnitVector(v), expected)

  v = {x: 1, z: 1}
  expected = {x: 2}

  t.same(add2DUnitVector(v), expected)

  v = {x: -1, y: -1}
  expected = {x: 0, y: 0}

  t.same(add2DUnitVector(v), expected)

  t.end()
})
