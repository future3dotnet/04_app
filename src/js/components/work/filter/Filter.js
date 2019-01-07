import React, {Component} from 'react';
import FilterSet from './FilterSet'



class Filter extends Component {
        
  render() {
      
   const {bannerfilters,setVisibilityFilter} = this.props
               
    return(
      <div className="Filter">
         <h1>Filter</h1>
        {Object.keys(bannerfilters).map(key =>
        <FilterSet
        key={bannerfilters[key].name}
        name={bannerfilters[key].jsonName}
        bannerfilter={bannerfilters[key]} 
        setVisibilityFilter={setVisibilityFilter} 
        /> )}
      </div>
   )

  }
}

export default Filter;


