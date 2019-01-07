import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer'
import logger from 'redux-logger'
import bannerVars from './middleware/bannerVars'


let store = createStore(RootReducer, applyMiddleware(thunk,logger,bannerVars));
//let store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
