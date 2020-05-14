import React from 'react';
import {NQ_Data} from './NQ_Data';
import { Helmet } from 'react-helmet';

class NinjaQuizz extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true,
    numberOfQuestions: 15
  }

  loadQuiz = () => {
    const {currentQuestion} = this.state;
    this.setState(() => {
      return {
        questions: NQ_Data[currentQuestion].question,
        options: NQ_Data[currentQuestion].options,
        answers: NQ_Data[currentQuestion].answer
      }
    })
  }

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestionHandler = () => {
    const {userAnswer, answers, score} = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
    //increment the score if answer is correct
    if(userAnswer === answers){
      this.setState({
        score: score + 1
      })
    }
  }
  //update the component
  componentDidUpdate(prevProps, prevState) {
    const {currentQuestion} = this.state;
    if(this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: NQ_Data[currentQuestion].question,
          options: NQ_Data[currentQuestion].options,
          answers: NQ_Data[currentQuestion].answer
        }
      })
    }
  }
  //Check answer
  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    })
  }
  //end
  finishHandler = () => {
    if(this.state.currentQuestion === NQ_Data.length -1) {
      this.setState({
        quizEnd: true
      })
    }
  }

  render() {
    const {questions, options, currentQuestion, userAnswer, quizEnd} = this.state;

    if(quizEnd) {
      return (
        <div className="nq-endpage">
          <Helmet><title>YGBC- NinjaQuiz</title></Helmet>
          <div className="nq-endbody">
            <h1>Game Ended! Your score is {this.state.score} / {this.state.numberOfQuestions}</h1>
            <p>The correct Answers for the quiz was:</p>
            <ul>
              {NQ_Data.map((item, index) => (
                <li className="ui floating message nq-options">
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className='ninjaQuiz'>
        <Helmet><title>YGBC-NinjaQuiz</title></Helmet>
        <div className="nq-body">
          <h1>Ninja Quiz</h1>
          <p id="nq-instructions">Select your answer by clicking on it then click on "next question"</p>
          <div className="nq-main">
            <small>{`Question ${this.state.currentQuestion + 1} of ${NQ_Data.length}`}</small>
            <h2>{questions}</h2>
            {options.map(option => (
              <p key={option.id}
                className={`ui floating message nq-options
                  ${userAnswer === option ? "nq-selected" : null}
                `}
                onClick={() => this.checkAnswer(option)}
                >
                {option}
              </p>
            ))}
            {currentQuestion < NQ_Data.length - 1 &&
            <button disabled={this.state.disabled} onClick={this.nextQuestionHandler}>
              Next Question
            </button>
            }
            {currentQuestion === NQ_Data.length - 1 &&
              <button onClick={this.finishHandler}>
              Finish
              </button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default NinjaQuizz;
