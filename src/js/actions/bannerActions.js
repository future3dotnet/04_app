import { FETCH_BANNERS_BEGIN, FETCH_BANNERS_SUCCESS, FETCH_BANNERS_FAILURE, SET_BANNER_PLAYING, SET_BANNER_STOPPED, SET_BANNER_ROLLED_OVER } from './actionTypes';

export function fetchJson(url) {
  return dispatch => {
    dispatch(fetchJsonBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchJsonSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchJsonFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const fetchJsonBegin = () => ({
  type: FETCH_BANNERS_BEGIN
});

export const fetchJsonSuccess = json => ({
  type: FETCH_BANNERS_SUCCESS,
  payload: { json }
});

export const fetchJsonFailure = error => ({
  type: FETCH_BANNERS_FAILURE,
  payload: { error }
});




export const setBannerRolledOver = (id) => ({
  type: SET_BANNER_ROLLED_OVER,
  payload : { id }
});

export const setBannerPlaying = (id) => ({
  type: SET_BANNER_PLAYING,
  payload : { id }
});

export const setBannerStopped = (id) => ({
  type: SET_BANNER_STOPPED,
  payload : { id }
});
