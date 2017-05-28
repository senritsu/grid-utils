import test from 'ava'

import {equal} from '../../../vector/operators/binary'

test('simple equality', t => {
  const testVectors = [
    [{x: 1}, {x: 1}],
    [{x: 2}, {x: 2}],
    [{y: 0}, {y: 0}],
    [{x: 1, y: 2, z: 3}, {x: 1, y: 2, z: 3}]
  ]
  for (const [v1, v2] of testVectors) {
    t.true(equal(v1, v2))
  }
})

test('simple inequality', t => {
  const testVectors = [
    [{x: 1}, {x: 2}],
    [{x: 2}, {y: 2}],
    [{z: 0}, {}],
    [{x: 1, y: 2, z: 3}, {x: 1, y: 2}]
  ]
  for (const [v1, v2] of testVectors) {
    t.false(equal(v1, v2))
  }
})

test('differing component count', t => {
  const testVectors = [
    [{x: 1}, {y: 1}],
    [{x: 1, y: 1}, {x: 1}],
    [{x: 1, y: 2, z: 3}, {y: 2, z: 3}]
  ]
  for (const [v1, v2] of testVectors) {
    t.false(equal(v1, v2))
  }
})
