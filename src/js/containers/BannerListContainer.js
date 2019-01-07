import { connect } from "react-redux";

import BannerList from '../components/work/BannerList';
import masonry from '../helpers/masonry';





const getVisibleBanners = (banners, filter, screenWidth) => {   
        
    var tmpBanners = banners;
    
    for (var key in filter) {
        
    if (!filter.hasOwnProperty(key)) continue;
        
         if(filter[key] !== "ALL"){
             
          tmpBanners =  filterArray (tmpBanners,key,filter[key]) 

         }
        
    }
    
    tmpBanners = checkSize(tmpBanners, screenWidth);
    
    tmpBanners = masonry(tmpBanners, screenWidth);
    
    return tmpBanners;
};



function filterArray(tmpBanners, key, filter) {

    if (Array.isArray(tmpBanners[0][key])) {
        var result = []

        tmpBanners.forEach(function (obj) {

            obj[key].forEach(function (d) {
                if (d === filter) {
                    result.push(obj);
                }
            })

        });

        return result

    } else {
        return tmpBanners.filter(t => t[key] === filter);
    }

}

function checkSize(tmpBanners, screenWidth){
    
 switch (true) {
    case (screenWidth < 700):
      tmpBanners = tmpBanners.filter(t => t.size.width === 300 && t.size.height === 250);
      break;
    case (screenWidth < 1050):
      tmpBanners = tmpBanners.filter(t => t.size.width <= 300);
      break;
    default:
  } 
    
    return (tmpBanners);
    
}



const mapStateToProps = state => ({
    
banners: getVisibleBanners(state.banners.data, state.filter.visibilityFilter, state.ui.screenWidth)
});

export default connect(mapStateToProps,null)(BannerList);