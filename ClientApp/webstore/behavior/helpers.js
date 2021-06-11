export const childrenGenerator = (size) => {
  if (size === 1) {
    return ''
  }
  return `children {
            ...navItem
            ${childrenGenerator(size-1)}
          }
        `
}

export const extractChildren = (items, flattenedItems=[]) => {
  items.forEach((item) => flattenedItems.push(item) && item.children && extractChildren(item.children, flattenedItems))
  return flattenedItems
}
