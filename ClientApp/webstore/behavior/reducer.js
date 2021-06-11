import { NAVIGATION_ITEMS_RECEIVED } from './actions'
import Fuse from 'fuse.js'
import { extractChildren } from './helpers'

const initialState = {
  searchItems: null
}


export function reducer(state=initialState, action) {
  switch(action.type) {
    case NAVIGATION_ITEMS_RECEIVED:
      return { searchItems: new Fuse(extractChildren(action.payload.items), {keys: ['title', 'link.url'], threshold: .2 })}

    default:
      return state
  }
}