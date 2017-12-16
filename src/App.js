import React, { Component } from 'react';
import logo from './my_image.svg';
import './App.css';
var marked = require('marked');



class App extends Component {

  

  constructor(props){

    super(props);

    let sampleMarkdown = "# This is a Header (H1 size) for my Markdown Previewer\n";
    sampleMarkdown += "## This is a subheader (H2 size)\n";
  
    this.state = {
      editorText: sampleMarkdown
    };

  }

  handleChange=(event)=>{

    this.setState({ editorText :event.target.value });

  }
  
  render() {
    return (
      <div id="main-div">
        <h1>Markdown Editor</h1>
        
        <textarea id="editor" onInput={this.handleChange} onChange={this.handleChange}>
                  {this.state.editorText}
        </textarea>
        
        <h1>Markdown Previewer</h1>
        <div id="preview" dangerouslySetInnerHTML={{ __html:marked(this.state.editorText) }}>
        </div>
         <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default App;
