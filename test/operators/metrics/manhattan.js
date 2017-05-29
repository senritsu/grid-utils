import test from 'ava'

import {equal} from '../../../vector/operators/binary'
import {euclidean, manhattan} from '../../../vector/operators/metrics'

let v1, v2, expected

test('2d vectors', t => {
  v1 = {x: 0, y: -1}
  v2 = {x: 1, y: 1}
  expected = 3
  t.is(manhattan(v1, v2), expected)

  v1 = {x: -2, y: 2}
  v2 = {x: 2, y: -2}
  expected = 8
  t.is(manhattan(v1, v2), expected)

  v1 = {x: 2, y: 2}
  v2 = {x: 4, y: 6}
  expected = 6
  t.is(manhattan(v1, v2), expected)
})

test('3d vectors', t => {
  v1 = {x: 0, y: -1, z: 0}
  v2 = {x: 1, y: 1, z: 1}
  expected = 4
  t.is(manhattan(v1, v2), expected)
})

test('jagged vectors', t => {
  v1 = {x: 3, z: -1}
  v2 = {y: 1, z: 2}
  expected = 3
  t.is(manhattan(v1, v2), expected)
})
