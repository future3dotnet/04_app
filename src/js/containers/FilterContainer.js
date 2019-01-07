import { connect } from "react-redux";

import Filter from '../components/work/filter/Filter'

import { setVisibilityFilter } from "../actions/filterActions";



function getFilters(bannerfilters,banners) {
    
    
    let tmpObj = [];
    
    bannerfilters.forEach(bannerfilter => {
         
          tmpObj[bannerfilter.jsonName] = [];
          tmpObj[bannerfilter.jsonName].name = bannerfilter.name;
          tmpObj[bannerfilter.jsonName].jsonName = bannerfilter.jsonName;
          tmpObj[bannerfilter.jsonName].arr = [bannerfilter.allBtn];
        
      banners.forEach(banner => {
          
          if(banner[bannerfilter.jsonName].isArray || typeof banner[bannerfilter.jsonName] === 'object'){
                        
           banner[bannerfilter.jsonName].forEach(value => {
                            
             addToArray( tmpObj[bannerfilter.jsonName].arr,value) 
                       
        })
          
      }else{
             addToArray( tmpObj[bannerfilter.jsonName].arr,banner[bannerfilter.jsonName]) 
      }
      
    })

})
    
//console.log (tmpObj)
    
return tmpObj;
    
    
}

function addToArray (items,item){
    
     var index = items.findIndex(x => x === item )

     if(index === -1){
        items.push(item)
     }
    
}


const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filterName,filterValue) => dispatch(setVisibilityFilter(filterName,filterValue))
})


const mapStateToProps = state => ({
    
  bannerfilters: getFilters (state.config.data.bannerfilters,state.banners.data)
  
    
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);