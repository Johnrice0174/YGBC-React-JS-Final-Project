import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText';

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

class TypingSpeedCalculator extends Component {
  state = initialState;

    onRestart = () => {
      this.setState(initialState)
    }

    onUserInputChange = (e) => {
      const v = e.target.value;
      this.setTimer();
      this.onFinish(v)
      this.setState({
        userInput: v,
        symbols: this.countCorrectSymbols(v)
      })
    }

    onFinish(userInput) {
      if (userInput === this.state.text) {
        clearInterval(this.interval);
        this.setState({
          finished: true
        })
      }
    }

    countCorrectSymbols(userInput) {
      const text = this.state.text.replace(' ', '');
      return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
    }

    setTimer() {
      if (!this.state.started) {
        this.setState({started: true});
        this.interval = setInterval(() => {
          this.setState(prevProps => {
            return {sec: prevProps.sec + 1}
          })
        }, 1000)
      }
    }


  render() {
    return (
      <div className="tsc-background">
        <Helmet><title>YGBC- TypingSpeedCalculator</title></Helmet>
        <div className="container">
          <div className="row tsc-row1">
            <h1 className="offset-md-3">Typing Speed Calculator</h1>
            <p className="offset-md-3">write the text below fastest as you can and get your <a href="https://en.wikipedia.org/wiki/Words_per_minute">wpm</a>-speed [refresh the page to get another text]</p>
            <div className="col-md-6 offset-md-3">
              <Preview text={this.state.text} userInput={this.state.userInput}/>
              <textarea
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                className="form-control mb-3"
                placeholder="Start typing..."
                readOnly={this.state.finished}
              >
              </textarea>
              <Speed sec={this.state.sec} symbols={this.state.symbols}/><span>{this.state.sec} seconds</span>
              <div className="text-right">
                <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TypingSpeedCalculator;
