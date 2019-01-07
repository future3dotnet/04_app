const bannerVars = store => next => action => {

if(action.type === 'FETCH_BANNERS_SUCCESS') {

    let tmpBanners = action.payload.json.banners
    
    let tmpWidth;
    let tmpHeight;

   
     tmpBanners.map(banner =>{
                   
         
      banner.imgStyle = {
            width : banner.size.width,
            height : banner.size.height
        };
                
      tmpWidth = 175;
      tmpHeight = 175;
        
      if(Number(banner.size.width) >= 175){
          tmpWidth = 350;
      }
      if(Number(banner.size.width) >= 700){
          tmpWidth = 1050;
      }
      if(Number(banner.size.height) >= 175){
          tmpHeight = 350;
      }
      if(Number(banner.size.height) >= 350){
          tmpHeight = 700;
      }
         
      banner.divStyle = {
            left :0,
            top : 0,
            width : tmpWidth,
            height : tmpHeight,
      }
      
      banner.val = "";
      banner.playing = false;
          
      return tmpBanners;
      
    })

}


return next(action)

}



export default bannerVars;
