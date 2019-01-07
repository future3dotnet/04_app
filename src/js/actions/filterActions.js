import { SET_VISIBILITY_FILTER } from './actionTypes';

export const setVisibilityFilter = (filterName,filterValue) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {filterName: filterName, filterValue: filterValue}
});
