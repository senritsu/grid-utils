import test from 'ava'

import {within} from './bounds'

let v, bounds, expected

test('uniform bounds (array operand)', t => {
  v = {x: 1, y: 1}
  bounds = [0, 2]
  t.true(within(v, bounds))

  v = {x: -1, y: 1}
  bounds = [0, 2]
  t.false(within(v, bounds))
})

test('2d non-uniform bounds', t => {
  v = {x: 1, y: 4}
  bounds = {x: [0, 2], y: [3, 5]}
  t.true(within(v, bounds))

  v = {x: 4, y: 1}
  bounds = {x: [0, 2], y: [3, 5]}
  t.false(within(v, bounds))
})

test('3d non-uniform bounds', t => {
  v = {x: 1, y: 4, z: 2}
  bounds = {x: [0, 2], z: [1, 3]}
  t.true(within(v, bounds))

  v = {x: 4, y: 1, z: 2}
  bounds = {x: [0, 2], y: [3, 5]}
  t.false(within(v, bounds))
})
