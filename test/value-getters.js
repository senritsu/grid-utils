import test from 'ava'

import {getScalarValue, getArrayValue} from '../vector/helpers/components'

let v, s

test('get scalar from object', t => {
  v = {x: 1, z: 2}
  t.is(getScalarValue(v, 'x'), 1)
  t.is(getScalarValue(v, 'y'), undefined)
  t.is(getScalarValue(v, 'z'), 2)
  t.is(getScalarValue(v, 'w'), undefined)
})

test('get scalar from array', t => {
  v = [1, 2]
  t.is(getScalarValue(v, 'x'), 1)
  t.is(getScalarValue(v, 'y'), 2)
  t.is(getScalarValue(v, 'z'), undefined)
  t.is(getScalarValue(v, 'w'), undefined)
})

test('get scalar from uniform', t => {
  s = 1
  t.is(getScalarValue(s, 'x'), 1)
  t.is(getScalarValue(s, 'y'), 1)
  t.is(getScalarValue(s, 'z'), 1)
  t.is(getScalarValue(s, 'w'), 1)
})

test('get array from object', t => {
  v = {x: [1, 2], z: [3, 4]}
  t.deepEqual(getArrayValue(v, 'x'), [1, 2])
  t.deepEqual(getArrayValue(v, 'y'), undefined)
  t.deepEqual(getArrayValue(v, 'z'), [3, 4])
  t.deepEqual(getArrayValue(v, 'w'), undefined)
})

test('get array from array', t => {
  v = [[1, 2], [3, 4]]
  t.deepEqual(getArrayValue(v, 'x'), [1, 2])
  t.deepEqual(getArrayValue(v, 'y'), [3, 4])
  t.deepEqual(getArrayValue(v, 'z'), undefined)
  t.deepEqual(getArrayValue(v, 'w'), undefined)
})

test('get array from uniform', t => {
  s = [1, 2]
  t.deepEqual(getArrayValue(s, 'x'), [1, 2])
  t.deepEqual(getArrayValue(s, 'y'), [1, 2])
  t.deepEqual(getArrayValue(s, 'z'), [1, 2])
  t.deepEqual(getArrayValue(s, 'w'), [1, 2])
})
