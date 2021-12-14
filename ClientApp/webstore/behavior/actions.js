export const REQUEST_NAVIGATION_ITEMS = "REQUEST/NAVIGATION"

export function requestNavigation(depth, group) {
  return {
    type: REQUEST_NAVIGATION_ITEMS,
    payload: {
      depth,
      group
    }
  }
}

export const NAVIGATION_ITEMS_RECEIVED = "NAVIGATION/ITEMS/RECEIVED"

export function navigationItemsReceived(items){
  return {
    type: NAVIGATION_ITEMS_RECEIVED,
    payload: {
      items
    }
  }
}