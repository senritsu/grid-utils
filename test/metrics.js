import test from 'ava'

import {euclidean, manhattan} from '../vector/operators/metrics'

test('euclidean', t => {
  let v1 = {x: 0, y: 0}
  let v2 = {x: 1, y: 1}
  let expected = Math.sqrt(2)
  t.deepEqual(euclidean(v1, v2), expected)
})

test('manhattan', t => {
  let v1 = {x: 0, y: -1, z: 0}
  let v2 = {x: 1, y: 1, z: 1}
  let expected = 4
  t.deepEqual(manhattan(v1, v2), expected)
})
