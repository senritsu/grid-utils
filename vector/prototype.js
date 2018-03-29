import {allComponents, definedComponents} from './util/components'

export default function Vector () {
  if (typeof arguments[0] === 'number') {
    allComponents.forEach((component, i) => {
      if (arguments[0] > i) {
        this[component] = 0
      }
    })
  } else {
    definedComponents(arguments[0]).forEach(component => {
      this[component] = arguments[0][component]
    })
  }
}

Vector.unit = (dimensions) => new Vector(dimensions).set(1)

Vector.prototype = {
  set () {
    definedComponents(this).forEach(component => {
      this[component] = arguments[0][component]
    })
  },
  map (f) {
    return f(this)
  }
}
