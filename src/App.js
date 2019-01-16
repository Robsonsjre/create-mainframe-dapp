import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainframeSDK from '@mainframe/sdk'

class App extends Component {

  sdk = new MainframeSDK()

  state = {
    sdkWorking: false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.sdk.blockchain.getWeb3Provider() !== null) {
      this.setState({sdkWorking: true})
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>MainframeSDK is { this.state.sdkWorking ? "" : "NOT" } working!</h1>
          <img src={this.state.sdkWorking ? "https://mainframe.com/static/monetization.f3c95d77.svg" : logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://mainframe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn to build on Mainframe.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
