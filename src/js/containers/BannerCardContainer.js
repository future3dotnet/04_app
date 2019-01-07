import { connect } from "react-redux";

import BannerCard from '../components/work/BannerCard'

import {  setBannerPlaying, setBannerRolledOver } from "../actions/bannerActions";

import objectValueExistsInArray from '../helpers/utilities';



function getSrc (  bannerPlaying, id, playing, val, url ){
        
    let src = "";
    
    if(val !== ""){
        src = url + '?val='+val;
    }
    
   if(bannerPlaying === id ){
       
       src = url + '?val='+val;
       
   }
    
   return src;
}




function getClassNameBannerCard( arr, bannerPlaying, bannerRolledOver, id, playing, val ) {

    let className = "BannerCardNotVis"

    if ( !objectValueExistsInArray(arr,"playing",true) ) {

        className = "BannerCard"
    }
    if(bannerRolledOver !== -1 && bannerRolledOver !== id ){
        className = "BannerCardNotVis"
    }
    if (bannerPlaying === id || bannerRolledOver === id) {

        className = "BannerCard"
    }
    
    
 return className;


}

function getClassNamePosterImage(bannerPlaying, id, playing, val) {

    let className = "PosterImage"

    if (bannerPlaying === id) {

        className = "PosterImageNotVis"
    }
    
 return className;


}

function getClassNamePlayIcon(bannerPlaying, id, playing, val) {

    let className = "PlayIcon"

    if (bannerPlaying === id && playing) {

        className = "PlayIconNotVis"

    }
    
    return className;

}

function getClassNameBannerInfo(bannerPlaying, bannerRolledOver,  id, playing, val) {

    let className = "BannerInfoNotVis"

    if (bannerPlaying === id || bannerRolledOver === id) {

        className = "BannerInfo"

    }
    
    return className;

}


const mapStateToProps = ( state, ownProps ) => ({

    src: getSrc(state.banners.bannerPlaying, ownProps.id, ownProps.playing, ownProps.val, ownProps.url),
    classNameBannerCard : getClassNameBannerCard (state.banners.data,state.banners.bannerPlaying,state.banners.bannerRolledOver,ownProps.id,ownProps.playing, ownProps.val),
    classNamePlayIcon : getClassNamePlayIcon (state.banners.bannerPlaying,ownProps.id,ownProps.playing, ownProps.val),
    classNamePosterImage : getClassNamePosterImage (state.banners.bannerPlaying,ownProps.id,ownProps.playing, ownProps.val),
    classNameBannerInfo : getClassNameBannerInfo (state.banners.bannerPlaying,state.banners.bannerRolledOver,ownProps.id,ownProps.playing, ownProps.val),
    
    //bannerRolledOver: state.banners.bannerRolledOver,
   // bannerStoppedPlaying: state.banners.bannerStoppedPlaying,

})

const mapDispatchToProps = (dispatch) => ({
    
    setBannerPlaying: (id) => dispatch(setBannerPlaying(id)),
    setBannerRolledOver: (id) => dispatch(setBannerRolledOver(id))
    
})


export default connect(mapStateToProps,mapDispatchToProps)(BannerCard);