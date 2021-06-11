export const SEARCH_NAVIGATION_ITEMS = "SEARCH/NAVIGATION"

export function searchNavigation(depth, group) {
  return {
    type: SEARCH_NAVIGATION_ITEMS,
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