import { ofType } from 'redux-observable';
import { REQUEST_NAVIGATION_ITEMS, navigationItemsReceived } from './actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { getFullNavigationQuery } from './queries';


export const navigationItemsEpic = (action$, _, { api }) => action$.pipe(
  ofType(REQUEST_NAVIGATION_ITEMS),
  switchMap(action => api.graphApi(getFullNavigationQuery(action.payload.depth), {group : action.payload.group}).pipe(
    map(val=>navigationItemsReceived(val.navigation.items)),
  )),
);