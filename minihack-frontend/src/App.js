import React, { Component } from 'react';
import { Container } from 'reactstrap';

import logo from './logo.svg';
import Message from "./Message";
import Button from "./Button";
import NewGame from "./Components/NewGame";
import Header from "./Components/Header";
import './App.css';

class App extends Component {
  state = {
    showImg: true,
    message: "Hello world",
    num: 0
  }

  componentWillMount() {
    console.log("Will mount");
  }

  componentDidMount() {
    console.log("Did mount");
    setTimeout(() => {
      this.setState({ showImg: false, message: "AAAAAAAAAAA" });
    }, 2000);
  }

  render() {
    console.log("Render");
    return (
      <Container className="App">
        <Header />
        <NewGame />
        {/* <header className="App-header">
          {this.state.showImg ? <img src={logo} className="App-logo" alt="logo" /> : "Hidden"}
          <div>
            <Message message={this.state.message} />
            Edit <code>src/App.js</code> and save to reload.
          </div>
          <div>
            <p>Click: {this.state.num}</p>
            <Button handleClick={() => { this.setState({ num: this.state.num + 1 }) }} />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </Container>
    );
  }
}

export default App;
