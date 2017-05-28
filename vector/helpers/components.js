export const allComponents = ['x', 'y', 'z', 'w']

export const definedComponents = v =>
  allComponents.filter(component => v[component] !== undefined)
