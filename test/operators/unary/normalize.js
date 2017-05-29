import test from 'ava'

import {normalize} from '../../../vector/operators/unary'
import {equal} from '../../../vector/operators/binary'

const cos45 = Math.cos(Math.PI / 4)

let v, expected

test('2d vectors', t => {
  v = {x: 1, y: 0}
  expected = {x: 1, y: 0}
  t.true(equal(normalize(v), expected))

  v = {x: 0, y: -1}
  expected = {x: 0, y: -1}
  t.true(equal(normalize(v), expected))

  v = {x: 0, y: 2}
  expected = {x: 0, y: 1}
  t.true(equal(normalize(v), expected))

  v = {x: 3, z: 3}
  expected = {x: cos45, z: cos45}
  t.true(equal(normalize(v), expected))
})

test('3d vectors', t => {
  v = {x: 2, y: 0, z: 2}
  expected = {x: cos45, y: 0, z: cos45}
  t.true(equal(normalize(v), expected))

  v = {x: -3, y: -3, z: -6*cos45}
  expected = {x: -0.5, y: -0.5, z: -cos45}
  t.true(equal(normalize(v), expected))
})
