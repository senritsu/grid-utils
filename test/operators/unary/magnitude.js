import test from 'ava'

import {magnitude} from '../../../vector/operators/unary'

let v, expected

test('magnitude', t => {
  let v = {x: 1, y: 1}
  let expected = Math.sqrt(2)
  t.is(magnitude(v), expected)

  v = {x: 1}
  expected = 1
  t.is(magnitude(v), expected)

  v = {x: 0, y: 0, z: 2}
  expected = 2
  t.is(magnitude(v), expected)
})
