import React, { Component } from 'react';
import './App.scss';

import Header from './Header'
import Error from './utils/Error'
import Loader from './utils/Loader'


const View = ({ data }) => <div className="App"><Header /></div>;


class App extends Component {
    

        
  componentDidMount() {
      this.props.fetchJson("CONFIG","/assets/json/config.json");
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

export default App;
