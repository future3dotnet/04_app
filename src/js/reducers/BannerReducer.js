import { FETCH_BANNERS_BEGIN, FETCH_BANNERS_SUCCESS, FETCH_BANNERS_FAILURE, SET_BANNER_PLAYING, SET_BANNER_STOPPED, SET_BANNER_ROLLED_OVER } from '../actions/actionTypes';

import { updateObject, updateItemInArray } from '../helpers/utilities';


const initialState = {
  data: [],
  loading: false,
  error: null,
  bannerPlaying: -1,
  playing: false,
  bannerRolledOver: -1
};

export default function bannerReducer(state = initialState, action) {
    
    
  switch(action.type) {
          
   case FETCH_BANNERS_BEGIN:
          
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_BANNERS_SUCCESS:
          
          
      return {
        ...state,
        loading: false,
        data: action.payload.json.banners
      };

    case FETCH_BANNERS_FAILURE:
          
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      };
     
          
        
          
          
          
    case SET_BANNER_PLAYING:
        
      let newData1;
          
      if(state.bannerPlaying !== -1){   
      newData1 = updateItemInArray(state.data, state.bannerPlaying, banner => {
        return updateObject(banner, {  playing: false })
      })
      }else{
        newData1 = state.data   
      }
          
      const newData11 = updateItemInArray(newData1, action.payload.id, banner => {
        return updateObject(banner, { val: banner.val === 0 ? 1 : 0 , playing: true })
      })

      return updateObject(state, {bannerPlaying:action.payload.id, data: newData11  })
      
      
      
      
    case SET_BANNER_STOPPED:
                                
      const newData2 = updateItemInArray(state.data, action.payload.id, banner => {
        return updateObject(banner, { playing: false })
      })
    
      return updateObject(state, {  data: newData2  })
    
             
    case SET_BANNER_ROLLED_OVER:
                                
    
      return updateObject(state, {  bannerRolledOver: action.payload.id  })
      
      
      
      
      
    default:
      return state;
  }
}