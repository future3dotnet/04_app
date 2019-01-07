import { connect } from "react-redux";

import Work from '../components/work/Work'
import { fetchJson } from "../actions/bannerActions";



function getJsonPath(assets,json,url){
    
   let path = assets+json+url
    
   return path; 
}



const mapDispatchToProps = (dispatch) => ({ 
    
  fetchJson: (url) => dispatch(fetchJson(url))
    
})

const mapStateToProps = state => ({
    
  loading: state.banners.loading,
  error: state.banners.error,
  data: state.banners.data,
    
  jsonPath: getJsonPath(state.config.data.path.assets,state.config.data.path.json,state.config.data.jsons.banners.url),
  keyName: state.config.data.jsons.banners.keyName

});

export default connect(mapStateToProps,mapDispatchToProps)(Work);