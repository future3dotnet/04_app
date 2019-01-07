import React, {Component} from 'react';


class Iframe extends Component {
    
 constructor(props) {
    super(props);
    this.IframeRef = React.createRef();
  } 
    
 componentDidMount() {
      
          const tmpIframe = this.IframeRef.current;
     
          var tmpId = this.props.id
     
           tmpIframe.onload = function() {
               
               tmpIframe.contentWindow.postMessage(tmpId, '*');
               
           }
  }    

    
  render() {
      
     const { 
        
        imgStyle,
        url
        
    } = this.props;

      
    return (
        <iframe className = "Iframe" ref={this.IframeRef}
          title="Banner Preview"
          style={imgStyle}
          src={url}
          scrolling = "no"
          frameBorder="0"
        />
    );

  }
}

export default Iframe;
