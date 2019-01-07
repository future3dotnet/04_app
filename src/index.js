import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './js/store'
import './index.css';
import AppContainer from './js/containers/AppContainer';
import * as serviceWorker from './serviceWorker';


import { screenResize } from "./js/actions/uiActions";
import {setBannerStopped } from "./js/actions/bannerActions";

      
//store.subscribe(() => console.log(store.getState()))


window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
});



window.onmessage = function(e){
    
    if(!isNaN(e.data)){
    //console.log("data back = ")
    //console.log(e.data)
    store.dispatch( setBannerStopped (e.data) )
    }
   // store.dispatch(setBannerPlaying (-1))
   // store.dispatch(setBannerRolledOver (e.data))
   // store.dispatch(setBannerStoppedPlaying (e.data))
    
};


ReactDOM.render( <Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
