import React, { Component } from 'react';
import logo from './my_image.svg';
import './App.css';
var marked = require('marked');
marked.setOptions({gfm:true, breaks:true });
var renderer = new marked.Renderer();

// Override renderer.link method 
renderer.link = function (href, title, text) {


  return '<a href="' + href + '" target="_blank">' + 
            text + 
         '</a>';

};


class App extends Component {

  

  constructor(props){

    super(props);

    console.log("logo is " + logo);

    let sampleMarkdown = "# This is a Header (H1 size) for my Markdown Previewer\n";
    sampleMarkdown += "## This is a subheader (H2 size)\n";
    sampleMarkdown += "This is a link to [FreeCodeCamp](https://www.freecodecamp.org), ";
    sampleMarkdown += "with whose help I am learning Web Development :)\n";
    sampleMarkdown += "```javascript\n"
    sampleMarkdown += "// Here is a code block\n\n";
    sampleMarkdown += "let cuterPokemon = ( poke1, poke2 ) => {\n";
    sampleMarkdown += "   if (poke1.name == 'Pikachu') \n";
    sampleMarkdown += "      return poke1\n";
    sampleMarkdown += "   else if (poke2.name == 'Pikachu') \n";
    sampleMarkdown += "      return poke2\n";
    sampleMarkdown += "   else return Pokeman.cutestPoke(poke1,poke2)\n";
    sampleMarkdown += "   })\n\n";
    sampleMarkdown += "// End of code block```\n\n\n";
    sampleMarkdown += "Here is some inline code :    `console.log(cuterPokemon(pikachu,bulbasaur);`\n\n";
    sampleMarkdown += "And here is a bulleted list of my boys' favorite pokemon:\n";
    sampleMarkdown += "- Pickachu\n";
    sampleMarkdown += "- Candy\n";
    sampleMarkdown += "- Torchik\n";
    sampleMarkdown += "- Corphish\n";
    sampleMarkdown += "- Seedot\n\n";
    sampleMarkdown += "\n\nAnd even a homemade svg!\n\n";
    sampleMarkdown += `![Pikachu](${logo} 'Pika Pi')`; 
    sampleMarkdown += "\n\nMy **very first** one!\n\n";
    sampleMarkdown += "\n\n> I am quite proud of that one :)";
    sampleMarkdown += "\n\n> But will try to make next one cuter!";
    sampleMarkdown += "\n\n> Two lines above were a blockquote, by the way.";
   
    
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
        <div id="preview" dangerouslySetInnerHTML={{ __html:marked(this.state.editorText, { renderer: renderer }) }}>
        </div>
      </div>
    );
  }
}

export default App;
