import React, { Component } from 'react';

import Game from './Game';
import StartWindow from './StartWindow';
import Menu from './Menu';
import './stylesheets/App.css';
import EndWindow from './EndWindow';

class App extends Component {
  state = {
    display: 'start',
    size: 16,
    chaos: 50,
    complexity: 2,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  }
  handleStartClick = () => {
    this.setState({
      display: 'menu',
    })

  }
  setPlay = () => {
    this.setState({
      display: 'game',
    })
  }
  setParameters = (param, type) => {
    if (type === "chaos")
      this.setState({
        chaos: param,

      })
    if (type === 'size')
      this.setState({
        size: param,

      })
    if (type === 'complexity')
      this.setState({
        complexity: param,

      })

  }
  restart = () => {
    this.setState({
      display: 'start'
    })
  }
  endGame = () => {
    this.setState({
      display: 'end',
    })
  }
  updateTime = () => {
    const { time } = this.state;
    if (time.minutes === 59 && time.seconds === 59) {
      time.hours++;
      time.minutes = 0;
      time.seconds = 0;
    }
    else if (time.seconds === 59) {
      time.minutes++;
      time.seconds = 0;
    }
    else time.seconds++;
    this.setState({ time });
  }
  resetTime = () => {
    const { time } = this.state;
    time.minutes = 0;
    time.hours = 0;
    time.seconds = 0;
    this.setState({ time });
  }
  render() {
    const display =
      this.state.display === 'game' ? <Game endF={this.endGame} chaos={this.state.chaos} size={this.state.size} complexity={this.state.complexity} time={this.state.time} updateTime={this.updateTime} /> :
        this.state.display === 'menu' ? <Menu setter={this.setParameters} init={this.setPlay} /> :
          this.state.display === 'end' ? <EndWindow size={this.state.size}
            chaos={this.state.chaos}
            complexity={this.state.complexity} restart={this.restart}
            time={this.state.time}
            resetTime={this.resetTime}
          /> :
            <StartWindow click={this.handleStartClick} />;
    return (
      <div className="application">
        {display}
      </div>
    );
  }
}

export default App;