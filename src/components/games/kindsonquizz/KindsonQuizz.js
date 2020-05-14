import React, { Component } from 'react';
import {KS_QuizData} from './KS_QuizData';
import { Helmet } from 'react-helmet';

export class KindsonQuizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true
    }
  }

  loadQuiz = () => {
    const {currentIndex} = this.state;
    this.setState(() => {
      return {
        question: KS_QuizData[currentIndex].question,
        options: KS_QuizData[currentIndex].options,
        answer: KS_QuizData[currentIndex].answer
      }
    })
  }

  nextQuestionHandler = () => {
    const {userAnswer, answer, score} = this.state;

    if(userAnswer === answer) {
      this.setState({
        score: score + 1
      })
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null
    })
  }

  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: KS_QuizData[currentIndex].question,
          options: KS_QuizData[currentIndex].options,
          answer: KS_QuizData[currentIndex].answer
        }
      });
    }
  }

  //Responds to the click of the finish button
  finishHandler = () => {
    if(this.state.currentIndex === KS_QuizData.length -1) {
      this.setState({
        quizEnd: true
      })
    }
  }

  render() {
    const {
      question,
      options,
      currentIndex,
      userAnswer,
      quizEnd
    } = this.state

    if(quizEnd) {
      return (
        <div className="ks-endpage">
          <Helmet><title>YGBC-KindsonQuiz</title></Helmet>
          <div className="ks-endbody">
            <h1>Game Ended! Your score is {this.state.score+1} points</h1>
            <p>The correct Answers for the quiz was:</p>
            <ul>
              {KS_QuizData.map((item, index) => (
                <li className="ks-options">
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="kinsonQuiz">
        <div className="ks-body">
          <h1>KindsonQuizz</h1>
          <p id="ks-instructions">Select your answer by clicking on it then click on "next question"</p>
          <div className="main">
            <small>{`Question ${currentIndex + 1} of ${KS_QuizData.length}`}</small>
            <h2>{question}</h2>
            {
              options.map(option =>
                <p
                  key={option.id}
                  className={`ks-options ${userAnswer === option? "ks-selected" : null}`}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>
              )
            }

            {currentIndex < KS_QuizData.length - 1 &&
            <button disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
              Next Question
            </button>}
            {currentIndex === KS_QuizData.length -1 &&
            <button onClick={this.finishHandler} disabled={this.state.disabled}>
              Finish
            </button>}
          </div>
        </div>
      </div>
    )
  }
}

export default KindsonQuizz;
