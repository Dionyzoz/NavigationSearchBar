import { ofType } from 'redux-observable';
import { SEARCH_NAVIGATION_ITEMS, navigationItemsReceived } from './actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { getFullNavigation } from './queries';


export const navigationItemsEpic = (action$, _, { api }) => action$.pipe(
  ofType(SEARCH_NAVIGATION_ITEMS),
  switchMap(action => api.graphApi(getFullNavigation(action.payload.depth), {group : action.payload.group}).pipe(
    map(val=>navigationItemsReceived(val.navigation.items)),
  )),
);