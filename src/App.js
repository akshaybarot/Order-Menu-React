import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';

class App extends Component {
  constructor(){
    super();
    this.state={
      nodetext:"",
      notes:["Akshay Barot", "Arpita Brahmbhatt"],
          }
  }
  updateNoteText(nodetext){
    this.setState({nodetext: nodetext.target.value})
  }
  handleKeyPress = (event) => {
    if(event.onKeyPress==="enter"){
      let notesArr = this.state.notes;
      notesArr.push(this.state.nodetext);
      this.setState({nodetext:''});
      }
    }
    deleteNote(index){
      let notesArr = this.state.notes;
      notesArr.splice(index,1);
      this.setState({notes:notesArr})
    }
  add(){
    if(this.state.nodetext ===''){return}
      let notesArr = this.state.notes;
      notesArr.push(this.state.nodetext);
      this.setState({nodetext:''});
       this.nameInput.focus();

    
  }
  render() { 
    let notes = this.state.notes.map((val,key)=>{
      return <Note key={key} text={val}
              deleteMethod={()=>this.deleteNote(key)} />
    })
    return (

      <div className="App">
      <h1 class="display-4">Todo List</h1>
        <input type="text"
         value={this.state.nodetext}
         ref={(input) => { this.nameInput = input; }} 
         className="textInput" aria-label="Text input with checkbox" placeholder="Please Enter Value"
         onChange={ nodetext=>this.updateNoteText(nodetext)}
         onKeyPress={this.handleKeyPress.bind(this)} />     <button className="btn btn-primary" onClick ={() => this.add(this)} onKeyPress="13">Submit</button>
        {notes}
      </div> );
                       
  
  }
}


export default App;
