import test from 'ava'

import {swizzle} from '../../vector/operators/swizzle'

const vector4 = {x: 1, y: 2, z: 3, w: 4}

const checkSwizzledVector = (t, expression, expected) => {
  t.deepEqual(swizzle(vector4, expression), expected)
}

const checkSwizzledScalar = (t, component, expected) => {
  t.is(swizzle(vector4, component), expected)
}

test('reorder', t => {
  checkSwizzledVector(t, 'wzyx', {x: 4, y: 3, z: 2, w: 1})
  checkSwizzledVector(t, 'xzy', {x: 1, y: 3, z: 2})
  checkSwizzledVector(t, 'wx', {x: 4, y: 1})
})

test('repeat', t => {
  checkSwizzledVector(t, 'xxyy', {x: 1, y: 1, z: 2, w: 2})
  checkSwizzledVector(t, 'zzz', {x: 3, y: 3, z: 3})
  checkSwizzledVector(t, 'yy', {x: 2, y: 2})
})

test('nonexistent components are skipped', t => {
  t.deepEqual(swizzle({x: 1, y: 2}, 'yyz'), {x: 2, y: 2})
  t.is(swizzle({y: 2, z: 3}, 'x'), undefined)
})

test('single component', t => {
  checkSwizzledScalar(t, 'x', 1)
  checkSwizzledScalar(t, 'y', 2)
  checkSwizzledScalar(t, 'z', 3)
  checkSwizzledScalar(t, 'w', 4)
})

test('numeric', t => {
  checkSwizzledVector(t, 'x0', {x: 1, y: 0})
  checkSwizzledVector(t, 'y111', {x: 2, y: 1, z: 1, w: 1})
  checkSwizzledVector(t, 'w0y1', {x: 4, y: 0, z: 2, w: 1})
  checkSwizzledVector(t, '1000', {x: 1, y: 0, z: 0, w: 0})
})

test('leading underscore', t => {
  checkSwizzledVector(t, '_01', {x: 0, y: 1})
  checkSwizzledVector(t, '_111', {x: 1, y: 1, z: 1})
  checkSwizzledVector(t, '_0001', {x: 0, y: 0, z: 0, w: 1})
})

test('partial application', t => {
  const inverse3d = swizzle('zyx')
  t.deepEqual(inverse3d({x: 1, y: 2, z: 3}), {x: 3, y: 2, z: 1})
  t.deepEqual(inverse3d({x: -2, y: 5, z: 9}), {x: 9, y: 5, z: -2})
  const keepZ = swizzle('00z')
  t.deepEqual(keepZ({x: 1, y: 2, z: 3}), {x: 0, y: 0, z: 3})
  t.deepEqual(keepZ({x: -2, y: 5, z: 9}), {x: 0, y: 0, z: 9})
  const make2d = swizzle('xy')
  t.deepEqual(make2d({x: 1, y: 2, z: 3}), {x: 1, y: 2})
  t.deepEqual(make2d({x: -2, y: 5, z: 9}), {x: -2, y: 5})
})

test('too many chars', t => {
  t.throws(() => swizzle(vector4, 'xxyyzz'))
  t.throws(() => swizzle(vector4, '11000'))
})

test('invalid chars', t => {
  t.throws(() => swizzle(vector4, 'asdf'))
  t.throws(() => swizzle(vector4, '234'))
})
