import React, {Component} from 'react';
//import FilterBtn from './FilterBtn'

import FilterLink from '../../../containers/FilterLink'


class FilterSet extends Component {
    
  componentDidMount() {
      this.props.setVisibilityFilter(this.props.bannerfilter.jsonName,"ALL");
  }
        
  render() {
      
   const {bannerfilter,name} = this.props
                  
    return(
      <div className="FilterSet">
      <div className="FilterTitle"><h2>{bannerfilter.name}</h2></div>
       {bannerfilter.arr.map(filter =>
       <FilterLink key={filter} filterName={name} filterValue={filter} >
        {filter}
    </FilterLink>

    )}
      </div>
  )
}
}

export default FilterSet;


