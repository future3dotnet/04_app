//import { FETCH_JSON_BEGIN, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './actionTypes';

export function fetchJson(key,url) {
  return dispatch => {
    dispatch(fetchJsonBegin(key));
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchJsonSuccess(key,json));
        return json;
      })
      .catch(error => dispatch(fetchJsonFailure(key,error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const fetchJsonBegin = key => ({
  type: `FETCH_JSON_BEGIN_${key}`,
  payload: { key:key }
});

export const fetchJsonSuccess = (key,data) => ({
  type: `FETCH_JSON_SUCCESS_${key}`,
  payload: { key:key, data:data   }
});

export const fetchJsonFailure = (key,error)  => ({
  type: `FETCH_JSON_FAILURE_${key}`,
  payload: { key:key, error:error   }
});