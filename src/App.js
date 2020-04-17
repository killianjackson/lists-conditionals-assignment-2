import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
    chars: [],
  };

  inputChangeHandler = (event) => {

    const value = event.target.value;
    const chars = value.split('');

    this.setState({
      inputValue: value,
      chars: chars,
    });
  }

  deleteChar = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index, 1);
    this.setState({
      inputValue: chars.join(''),
      chars: chars,
    });
  }

  render() {
    let chars = null;
    
    if (this.state.chars) {
      chars = this.state.chars.map((char, index) => {
        return <Char letter={char} index={index} delete={() => this.deleteChar(index)} />
      });
    }

    return (
      <div className='App'>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.inputValue} />
        <p>{this.state.inputValue}</p>
        <Validation strLength={this.state.inputValue.length} />
        {chars}
      </div>
    );
  }
}

export default App;
