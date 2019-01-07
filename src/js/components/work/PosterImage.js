import React, {Component} from 'react';


class PosterImage extends Component {
    
    
  render() {

    const { 
        
        className,
        imgStyle,
        imgSrc
        
    } = this.props;
   
    return (
      <div className = {className} style={imgStyle} >
        
        <img src=  {imgSrc}  alt="banner" style={imgStyle} />
      
      </div>
    );

  }
}

export default PosterImage;
