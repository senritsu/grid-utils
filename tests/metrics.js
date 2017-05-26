import test from 'blue-tape'

import {euclidean, manhattan} from '../vector/metrics'

test('metrics: euclidean', t => {
  let v1 = {x: 0, y: 0}
  let v2 = {x: 1, y: 1}
  let expected = Math.sqrt(2)
  t.same(euclidean(v1, v2), expected)

  t.end()
})

test('metrics: manhattan', t => {
  let v1 = {x: 0, y: -1, z: 0}
  let v2 = {x: 1, y: 1, z: 1}
  let expected = 4
  t.same(manhattan(v1, v2), expected)

  t.end()
})
