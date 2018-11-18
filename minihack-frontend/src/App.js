import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import logo from './logo.svg';
import Message from "./Message";
import Button from "./Button";
import Loading from "./Components/Loading";
import NewGame from "./Components/NewGame";
import Header from "./Components/Header";
import PlayGame from './Components/PlayGame';
import './App.css';

class App extends Component {
  state = {
    showImg: true,
    message: "Hello world",
    num: 0,
    game: null,
    loading: true
  }

  componentWillMount() {
    console.log("Will mount");
  }

  componentDidMount() {
    if(window.location.pathname) {
      const pathParams = window.location.pathname.slice(1).split("/");
      if(pathParams[1] && pathParams[0] === "game") {
        const questionId = pathParams[1];

        axios({
          url: `http://10.10.3.188:6969/api/game/${questionId}`,
          method: "GET"
        }).then(response => {
          console.log(response.data);
          if(response.data.success) {
            setTimeout(() => {
              this.setState({ game: response.data.game, loading: false });
            }, 2000);
          }
        }).catch(error => {
          this.setState({ game: null, loading: false });
          console.log(error)
        });
      } else {
        this.setState({ loading: false, game: null });
      }
    }
  }

  render() {
    const { game, loading } = this.state;

    return (
      <Container className="App">
        <Header />
        { loading ? (
          <div className="text-center">
            <Loading />
          </div> ) : ( game ?
            <PlayGame /> :
            <NewGame toggleLoading={(loading) => { this.setState({loading}) }} />
          )
        }
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
