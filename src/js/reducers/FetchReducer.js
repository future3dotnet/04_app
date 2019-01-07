//import { FETCH_JSON_BEGIN, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from '../actions/actionTypes'


export default function createFetchReducer(key = '') {
    
const initialState = {
  data: [],
  loading: false,
  error: null,
};

return function fetchReducer(state = initialState, action) {
  switch(action.type) {
          
    case `FETCH_JSON_BEGIN_${key}`:
      
      return {
        ...state,
        loading: true,
        error: null
      };

    case `FETCH_JSON_SUCCESS_${key}`:

      return {
        ...state,
        loading: false, 
        data: action.payload.data    
      };

    case `FETCH_JSON_FAILURE_${key}`:
          
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      };
          
          
    default:
      return state;
  }
 }
}