import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      editorText:'I am groot'
    };

  }

  handleChange=(event)=>{

    this.setState({ editorText :event.target.value });

  }
  
  render() {
    return (
      <div id="main-div">
        <h1>Markdown Editor</h1>
        
        <textarea id="editor" onChange={this.handleChange}>
          {this.state.editorText}
        </textarea>
        
        <h1>Markdown Previewer</h1>
        <div id="preview">
          {this.state.editorText}
        </div>

      </div>
    );
  }
}

export default App;
