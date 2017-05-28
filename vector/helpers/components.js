export const allComponents = ['x', 'y', 'z']

export const definedComponents = v =>
  allComponents.filter(component => v[component] !== undefined)
