import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;
`
const AppLogoSpin = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`
const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button>Hello</Button>
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
