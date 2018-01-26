import React from 'react';

export default class Chrono extends React.Component {
  state = {lapse: 0, isRunning: false};

  onStartStop = () => {
    this.state.isRunning ? this._stop() : this._start();
    this.setState({isRunning: !this.state.isRunning});
  };

  onClear = () => {
    clearInterval(this.timer);
    this.setState({lapse: 0, isRunning: false});
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _start() {
    const start = Date.now() - this.state.lapse;
    this.timer = setInterval(() => {
      this.setState({lapse: Date.now() - start});
    });
  }

  _stop() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const {lapse, isRunning} = this.state;
    return (
      <div className="chrono">
        <h1>{lapse}ms</h1>
        <button onClick={this.onStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.onClear}>Clear</button>
      </div>
    );
  }
}