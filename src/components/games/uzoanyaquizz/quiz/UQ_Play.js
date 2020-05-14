import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet';
import M from 'materialize-css';
import uq_questions from '../uq_questions.json';
import isEmpty from '../utils/is_empty';
import correctNotification from '../assets/audio/correct_answer.mp3';
import wrongNotification from '../assets/audio/wrong_answer.mp3';
import buttonSound from '../assets/audio/button_sound.mp3';

class UQ_Play extends Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: uq_questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: false,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      previousRandomNumbers: [],
      time: {}
    };
    this.interval = null;
    this.uqCorrectSound = React.createRef();
    this.uqWrongSound = React.createRef();
    this.uqButtonSound = React.createRef();
  }

  componentDidMount () {
    const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
    this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
    this.startTimer();
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
    let {currentQuestionIndex} = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState ({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        numberOfQuestions: questions.length,
        answer,
        previousRandomNumbers: []
      }, () => {
        this.showOptions();
        this.handleDisabledButton();
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      setTimeout(() => {
        this.uqCorrectSound.current.play();
      }, 500);
      this.correctAnswers();
    } else {
      setTimeout(() => {
        this.uqWrongSound.current.play();
      }, 500);
      this.wrongAnswers();
    }
  }
  correctAnswers = () => {
    M.toast({
      html: 'Correct Answer!',
      classes: 'toast-valid',
      displayLength: 1500
    });
    this.setState(prevState => ({
      score: prevState.score + 1,
      correctAnswers: prevState.correctAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    }), () => {
      if (this.state.nextQuestion === undefined) {
        this.endGame();
      } else {
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    });
  }
  wrongAnswers = () => {
    navigator.vibrate(1000);
    M.toast({
      html: 'Wrong Answer!',
      classes: 'toast-invalid',
      displayLength: 1500
    });
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    }), () => {
      if (this.state.nextQuestion === undefined) {
        this.endGame();
      } else {
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    });
  }

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case 'uq-next-button':
        this.handleNextButtonClick();
        break;
      case 'uq-previous-button':
        this.handlePreviousButtonClick();
        break;
      case 'uq-quit-button':
        this.handleQuitButtonClick();
        break;
      default:
        break;
    }
    this.playButtonSound();
  };

  playButtonSound = () => {
    this.uqButtonSound.current.play();
  };

  handleNextButtonClick = () => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined){
        this.setState(prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1
        }), () => {
            this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      });
    }
  };
  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined){
        this.setState(prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1
        }), () => {
            this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      });
    }
  };
  handleQuitButtonClick = () => {
    if (window.confirm('Are you sure you want to quit ?')) {
        this.props.history.push('/uzoanya_quizz');
    }
  };

  showOptions = () => {
    const options = Array.from(document.querySelectorAll('.uq-option'));
    options.forEach(option => {
      option.style.visibility = 'visible';
    });

    this.setState({
      usedFiftyFifty: false
    });
  }

  handleHints = () => {
    if (this.state.hints > 0) {
      const options = Array.from(document.querySelectorAll('.uq-option'));
      let indexOfAnswer;

      options.forEach((option, index) => {
        if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
          indexOfAnswer = index;
        }
      });

      while (true) {
        const randomNumber = Math.round(Math.random() * 3);
        if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
          options.forEach((option, index) => {
            if (index === randomNumber) {
              option.style.visibility = 'hidden';
              this.setState((prevState) => ({
                hints: prevState.hints - 1,
                previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
              }));
            }
          });
          break;
        }
        if (this.state.previousRandomNumbers.length >= 3) break;
      }
    }
  }

  handleFiftyFifty = () => {
    if (this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false) {
      const options = document.querySelectorAll('.uq-option');
      const randomNumbers = [];
      let indexOfAnswer;
      options.forEach((option, index) => {
        if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
          indexOfAnswer = index;
        }
      });
      let count = 0;
      do {
        const randomNumber = Math.round(Math.random() * 3);
        if (randomNumber !== indexOfAnswer) {
          if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
            randomNumbers.push(randomNumber);
            count ++;
          } else {
              while (true) {
                const newRandomNumber = Math.round(Math.random() * 3);
                if (!randomNumbers.includes(newRandomNumber) && !randomNumbers.includes(indexOfAnswer)) {
                  randomNumbers.push(newRandomNumber);
                  count ++;
                  break;
                }
              }
          }
        }
      } while (count < 2);
      options.forEach((option, index) => {
        if (randomNumbers.includes(index)) {
          option.style.visibility = 'hidden';
        }
      });
      this.setState(prevState => ({
        fiftyFifty: prevState.fiftyFifty - 1,
        usedFiftyFifty: true
      }));
    }
  }

  startTimer = () => {
    const countDownTime = Date.now() + 180000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState({
          time: {
            minutes: 0,
            seconds: 0
          }
        }, () => {
          this.endGame();
        });
      } else {
          this.setState({
            time: {
              minutes,
              seconds
            }
          });
      }
    }, 1000);
  }

  handleDisabledButton = () => {
    if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
      this.setState({
        previousButtonDisabled: true
      });
    } else {
        this.setState({
          previousButtonDisabled: false
        });
    }
    if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions) {
        this.setState({
          nextButtonDisabled: true
      });
    } else {
        this.setState({
          nextButtonDisabled: false
        });
      }
  }

  endGame = () => {
    alert('Quiz has ended!');
    const { state } = this;
    const playerStats = {
      score: state.score,
      numberOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      usedFiftyFifty: 2 - state.fiftyFifty,
      hintsUsed: 5 - state.hints
    };
    setTimeout(() => {
      this.props.history.push('/uq/play/uq-summary', playerStats);
    }, 1000);
  }

  render () {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      hints,
      fiftyFifty,
      time,
    } = this.state;

    return (
      <Fragment>
        <Helmet><title>YGBC- UQ Page</title></Helmet>
        <Fragment>
          <audio ref={this.uqCorrectSound} src={correctNotification}></audio>
          <audio ref={this.uqWrongSound} src={wrongNotification}></audio>
          <audio ref={this.uqButtonSound} src={buttonSound}></audio>
        </Fragment>
        <div className="uq-questions">
          <h2>Quiz Mode</h2>
          <div className="uq-lifeline-container">
            <p>
              <span onClick={this.handleFiftyFifty} className="mdi mdi-set-center mdi-24px lifeline-icon">
                <span className="uq-lifeline">{fiftyFifty}</span>
              </span>
            </p>
            <p>
              <span onClick={this.handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                <span className="uq-lifeline">{hints}</span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="left">{currentQuestionIndex+1} of {numberOfQuestions}</span>
              <span className="right">{time.minutes}:{time.seconds}<span className="mdi mdi-clock-outline mdi-24px"></span></span>
            </p>
          </div>
          <h5>{currentQuestion.question}</h5>
          <div className="uq-options-container">
            <p onClick={this.handleOptionClick} className="uq-option">{currentQuestion.optionA}</p>
            <p onClick={this.handleOptionClick} className="uq-option">{currentQuestion.optionB}</p>
          </div>
          <div className="uq-options-container">
            <p onClick={this.handleOptionClick} className="uq-option">{currentQuestion.optionC}</p>
            <p onClick={this.handleOptionClick} className="uq-option">{currentQuestion.optionD}</p>
          </div>

          <div className="uq-button-container">
             <button
                className={{'uq-disable': this.state.previousButtonDisabled}}
                id="uq-previous-button"
                onClick={this.handleButtonClick}>
                Previous
             </button>
             <button
                className={{'uq-disable': this.state.nextButtonDisabled}}
                id="uq-next-button"
                onClick={this.handleButtonClick}>
                Next
             </button>
             <button id="uq-quit-button" onClick={this.handleButtonClick}>Quit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default UQ_Play;
