import test from 'ava'

import {equal} from '../../../vector/operators/binary'
import {euclidean} from '../../../vector/operators/metrics'

const almostEqual = (a, b) => Math.abs(a - b) <= Number.EPSILON
const cos45 = Math.cos(Math.PI/4)

test('2d vectors', t => {
  let v1 = {x: 0, y: 0}
  let v2 = {x: 1, y: 1}
  let expected = Math.sqrt(2)
  t.true(almostEqual(euclidean(v1, v2), expected))

  v1 = {x: 2, y: 1}
  v2 = {x: 3, y: 1}
  expected = 1
  t.true(almostEqual(euclidean(v1, v2), expected))
})

test('3d vectors', t => {
  let v1 = {x: 1, y: 1, z: 1}
  let v2 = {x: 2, y: 2, z: 2}
  let expected = Math.sqrt(3)
  t.true(almostEqual(euclidean(v1, v2), expected))
})

test('jagged vectors', t => {
  let v1 = {x: 2, y: 1}
  let v2 = {x: 3, z: 2}
  let expected = 1
  t.true(almostEqual(euclidean(v1, v2), expected))
})
