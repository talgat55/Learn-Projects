import React, { Component } from 'react';
import './App.css';
import   Button from  './components/Button';
import   { Input } from  './components/Input';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Input input={this.state.input}></Input>
       <div className="calc-walp">
           <Button>1</Button>
           <Button>2</Button>
           <Button>3</Button>
           <Button>4</Button>
       </div>
      </div>
    );
  }
}

export default App;
