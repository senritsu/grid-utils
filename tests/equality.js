const test = require('blue-tape')

const {add, subtract, multiply, divide, equal} = require('../vector/math')

test('equality', t => {
  const testVectors = [
    [{x: 1}, {x: 1}],
    [{x: 2}, {x: 2}],
    [{y: 0}, {y: 0}],
    [{x: 1, y: 2, z: 3}, {x: 1, y: 2, z: 3}]
  ]
  for (const [v1, v2] of testVectors) {
    t.assert(equal(v1, v2))
  }
  t.end()
})

test('inequality', t => {
  const testVectors = [
    [{x: 1}, {x: 2}],
    [{x: 2}, {y: 2}],
    [{z: 0}, {}],
    [{x: 1, y: 2, z: 3}, {x: 1, y: 2}]
  ]
  for (const [v1, v2] of testVectors) {
    t.assert(!equal(v1, v2))
  }
  t.end()
})
