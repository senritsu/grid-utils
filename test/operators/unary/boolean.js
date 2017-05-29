import test from 'ava'

import {every, some} from '../../../vector/operators/unary'

let v

test('every', t => {
  v = {x: 1, y: 0}
  t.false(every(v))

  v = {x: 0, y: 1}
  t.false(every(v))

  v = {x: 0, y: 0}
  t.false(every(v))

  v = {z: 1}
  t.true(every(v))

  v = {x: 1, y: 1}
  t.true(every(v))

  v = {x: 0, y: 0}
  t.false(every(v))
})

test('some', t => {
  v = {x: 1, y: 0}
  t.true(some(v))

  v = {x: 0, y: 1}
  t.true(some(v))

  v = {x: 0, y: 0}
  t.false(some(v))

  v = {z: 1}
  t.true(some(v))

  v = {x: 1, y: 1}
  t.true(some(v))

  v = {x: 0, y: 0}
  t.false(some(v))
})
