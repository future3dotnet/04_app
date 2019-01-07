import React, {Component} from 'react';

import BannerCardContainer from '../../containers/BannerCardContainer'
import NoResults from '../utils/NoResults'



class BannerList extends Component {
    
    constructor(props) {
    super(props);
    this.bannerList = React.createRef();
    this.state = {
            masonryInitialised: false,
            masonry:{}
         };
  } 
    
    componentDidMount() {
        
      //  this.setMasonry()
        
    }
   
    componentDidUpdate(){
        
      //  this.setMasonry()
            
  }
    
/* setMasonry(){
     
      
      if (!this.state.masonryInitialised && this.props.banners.length >0) {

          const container = this.bannerList.current;

          var msnr = new window.Masonry(container, {
              columnWidth: 5,
              itemSelector: '.BannerCard',
              //gutter:10
          });

          this.setState({
              masonryInitialised: true,
              masonry: msnr
          });

      } 
      
      if (this.state.masonryInitialised && this.props.banners.length >0) {

          this.state.masonry.reloadItems();
          this.state.masonry.layout();

      }
 }*/
    
    

  render() {
      
        //<h1>BannerList</h1>
        //Number of items : {banners.length}<br></br>

      
      const { banners } = this.props
      
      if(banners.length===0){
          
    return (
      <div className="BannerList">
         <h1>BannerList</h1>
      <NoResults/>
      </div>
    );
          
      }
            
    return (
      <div className="BannerList" ref={this.bannerList}>
      {banners.map(banner =>
      <BannerCardContainer
        key={banner.id}
        {...banner}
        />)}
        
      </div>
    );

  }
}

export default BannerList;

