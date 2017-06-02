import test from 'ava'

import Vector from '../vector/prototype'
import {clone} from '../vector/helpers/misc'

let v

function Test () {
  this.x = 1
  this.y = 2,
  this.foo = 'bar'
}

test('simple object vector', t => {
  v = {x: 1, y: 2}
  t.deepEqual(clone(v), {x: 1, y: 2})

  v = {x: 1, z: 3}
  t.deepEqual(clone(v), {x: 1, z: 3})
})

test('constructor function', t => {
  v = new Test
  t.deepEqual(clone(v), new Test)
})

test('additional properties are preserved', t => {
  v = {x: 1, y: 2, foo: 'bar'}
  t.deepEqual(clone(v), {x: 1, y: 2, foo: 'bar'})
})

test('correct prototype', t => {
  v = {x: 1, y: 2}
  t.is(Object.getPrototypeOf(clone(v)), Vector.prototype)

  v = new Test
  t.is(Object.getPrototypeOf(clone(v)), Test.prototype)
})
