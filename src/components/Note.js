import React, { Component } from 'react';

class Note extends Component {
  
  
  render() { 
    return (
     <div className="row">
     <div className="col-3"></div>
     <div className="col-3">
     <div className="note">
      <p className="mb-0">{this.props.text}</p></div>
    </div>
     <div className="col-3"> <button className="btn btn-danger" onClick={this.props.deleteMethod}>Remove</button></div>
     <div className="col-3"></div> 
  
            
     </div>
            );
  
  }
}


export default Note;
