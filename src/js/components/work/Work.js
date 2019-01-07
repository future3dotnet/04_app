import React, { Component } from 'react';

import Error from '../utils/Error'
import Loader from '../utils/Loader'

import FilterContainer from '../../containers/FilterContainer'
import BannerListContainer from '../../containers/BannerListContainer'


const View = ({ banners }) => <div className="Work">
    <FilterContainer />
    <BannerListContainer />
    </div>;


class Work extends Component {
        
  componentDidMount() {
      
      const {fetchJson, jsonPath } = this.props;
      
      fetchJson(jsonPath);
      
  }  
  render() {

      const { loading, data } = this.props;

      if (loading) {
          return <Loader /> ;
      } else if (Object.keys(data).length !== 0) {
          return <View { ...data}/>;
      } else {
          return <Error /> ;
      }
  }
}

export default Work;


