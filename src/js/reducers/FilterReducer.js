import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';


const initialState = {
visibilityFilter : {}
}

export default function filterReducer(state = initialState, action) {
    
    
  switch(action.type) {
          
    case SET_VISIBILITY_FILTER:
          
          console.log("SET_VISIBILITY_FILTER - reducer")
          
          let visibilityFilter = Object.assign({}, state.visibilityFilter)
          
          visibilityFilter[action.payload.filterName] = action.payload.filterValue
                    
      return {
        ...state,
        visibilityFilter
      };

                  
    default:
      return state;
  }
}