import { connect } from "react-redux";

import App from '../components/App'
import { fetchJson } from "../actions/fetchActions";




const mapDispatchToProps = (dispatch) => ({ 
    
  fetchJson: (key,url) => dispatch(fetchJson(key,url))
    
})

const mapStateToProps = state => ({
    
    
  loading: state.config.loading,
  error: state.config.error,
  data: state.config.data,

});

export default connect(mapStateToProps,mapDispatchToProps)(App);


