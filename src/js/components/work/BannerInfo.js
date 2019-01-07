import React, {Component} from 'react';


class BannerInfo extends Component {
    
    
    
  render() {
      
    const { 
        
        className,
        client,
        description
        
    } = this.props;

         
    return (
      <div className = {className}  >
        
      <div className = "BannerInfoTitle"  >
        
         <div className = "Client"> {client.brand}</div> 

        
        </div> 
        
        <div className = "BannerInfoDescription"  >
        
         <div className = "Description"> {description}</div> 

        </div>
        
        

      </div>
    );  
      
/*      return (
      <div className = {this.props.className}  >
        
      <div className = "BannerInfoTitle"  >
        
         <div className = "Client"> <b>Client: </b>{this.props.client.brand}</div> 

         <div className = "Agency"> <b>Agency: </b>{this.props.agency.name}</div>         
        
        </div> 
        
        <div className = "BannerInfoDescription"  >
        
         <div className = "Description"> {this.props.description}</div> 

        </div>
        
        

      </div>
    );   */      
  }
}

export default BannerInfo;

