export const allComponents = ['x', 'y', 'z', 'w']

export const componentOrder = {
  x: 0,
  y: 1,
  z: 2,
  w: 3
}

export const definedComponents = v => Array.isArray(v)
  ? allComponents.slice(0, v.length)
  : allComponents.filter(component => v[component] !== undefined)
