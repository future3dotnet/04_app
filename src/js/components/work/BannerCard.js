import React, { Component } from 'react';

import PosterImage from './PosterImage'
import BannerInfo from './BannerInfo'
import Iframe from './Iframe'
import PlayIcon from './PlayIcon'



class BannerCard extends Component {
    

/*

componentDidUpdate = prevProps => {
    
    const name =
        this.constructor.displayName || this.constructor.name || 'Component';
    console.group(name);
    Object.keys(prevProps).forEach(key => {
        if (prevProps[key] !== this.props[key]) {
            console.log(
                `property ${key} changed from ${prevProps[key]} to ${
                    this.props[key]
                }`
            );
            console.log(prevProps[key])
            console.log(this.props[key])
        }
    });
    console.groupEnd(name);
};
*/


        
    
  render() {
      
    const { 
        
        id,
        src,
        imgStyle, 
        divStyle, 
        posterimage, 
        setBannerPlaying,
        setBannerRolledOver,
        classNameBannerCard,
        classNamePosterImage,
        classNamePlayIcon,
        classNameBannerInfo,
        client,
        description

        
    } = this.props;
      
     console.log("re rendering == "+ id)
     
     var cardId = "bannercard_" + id
          
    return (
        
   <div className={classNameBannerCard} id={cardId} style={divStyle} >
        
     < BannerInfo className={classNameBannerInfo} 
        client = {client}  
        description = {description} 

    />  
        
      <Iframe  
        url = {src}  
        imgStyle = {imgStyle} 
        id = {id} 
     />  
        
     <PosterImage className={classNamePosterImage}  
        imgSrc = {posterimage}  
        imgStyle = {imgStyle} 
        id = {id}  
    />
        
      < PlayIcon className={classNamePlayIcon}  style={imgStyle} 
        onClick={() => setBannerPlaying(id)} 
        onMouseEnter={() => setBannerRolledOver(id)}
        onMouseLeave={() => setBannerRolledOver(-1)} 

        alt = "playIcon" 
    />  
        
        
    </div>
        
    );

  }
}

export default BannerCard;


 //{id} - {size.width} - {size.height} - {type} - {client.brand}

