import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {randomWord} from './Words';
import step0 from './hangman_image/0.jpg';
import step1 from './hangman_image/1.jpg';
import step2 from './hangman_image/2.jpg';
import step3 from './hangman_image/3.jpg';
import step4 from './hangman_image/4.jpg';
import step5 from './hangman_image/5.jpg';
import step6 from './hangman_image/6.jpg';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0,step1,step2,step3,step4,step5,step6]
  }
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : <b id="hgm-underscore">___ </b>));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class="btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ))
  }

  restartButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = <p id="hgm-win">Great! You Won!</p>
    }
    if (gameOver) {
      gameStat = <p id="hgm-lose">You Lost! Maybe another game ? You can do it!</p>
    }

    return(
      <div className="hangman hgm-container">
        <Helmet><title>YGBC- Hangman</title></Helmet>
        <h1 className="text-center">Hangman</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center hgm-guesspart">
          <p>Guess the Random English Word:</p>
          <p id="hgm-guessedWord">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className="btn btn-info" onClick={this.restartButton}>Restart New Game</button>
          <br/><br/>
        </div>
      </div>
    )
  }
}
export default Hangman;
