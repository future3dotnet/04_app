import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import WorkContainer from '../containers/WorkContainer'
import Contact from './Contact'



class Header extends Component {
    
  render() {
    
    return (
    <div className="Header">
        
        <h1>Header</h1>
        
<Router>
    <div>
      <nav>

      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>

      </nav>  

        
      <Route exact path="/" component={Home} />
      <Route path="/work" component={WorkContainer} />
      <Route path="/contact" component={Contact} />

    </div>
</Router>
      </div>
    );
  }
}

export default Header;

