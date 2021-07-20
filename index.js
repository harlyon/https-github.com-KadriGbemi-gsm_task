import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  function clickHandler() {
    this.setState({ value: me})
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" />
      <Username value={value}  />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
render(<App />, rootElement);
