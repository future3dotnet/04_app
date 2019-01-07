import React, {Component} from 'react';
import FilterLink from '../../containers/FilterLink'


class FilterBtn extends Component {
        
  render() {
      
   const {bannerfilter} = this.props
               
    return(
      <div className="FilterBtn">
      {bannerfilter}
      </div>
   )

  }
}

export default FilterBtn;


