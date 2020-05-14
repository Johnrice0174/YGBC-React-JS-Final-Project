import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class UQ_QuizSummary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      usedFiftyFifty: 0
    }
  }
  componentDidMount () {
    const {state} = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        usedFiftyFifty: state.usedFiftyFifty
      });
    }
  }
  render () {
    const {state} = this.props.location;
    let stats, remark;
    const userScore = this.state.score;

    if (userScore <= 30) {
      remark = 'Maybe you are not made for this game...';
    } else if (userScore > 30 && userScore < 50) {
      remark = 'There is always Hope! You can do it!';
    } else if (userScore <= 70 && userScore > 50) {
      remark = 'Be Concentrated! You can do better!';
    } else if (userScore >= 71 && userScore <= 84) {
      remark = 'Nice! You did great!';
    } else {
      remark = 'Wow! You\'re an absolute genius!';
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <main className="uq-sum-main">
            <div style={{textAlign: 'center', marginBottom: '5vh'}}>
              <span className="mdi mdi-check-circle-outline mdi-24px success-icon"></span>
            </div>
            <h1 className="uq-sum-endtitle">Quiz has ended</h1>
            <div className="uq-sum-container">
              <h4>{remark}</h4>
              <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
              <span className="uq-stat left">Total number of questions: </span>
              <span className="right">{this.state.numberOfQuestions}</span>
              <br/>
              <span className="uq-stat left">Number of attempted questions: </span>
              <span className="right">{this.state.numberOfAnsweredQuestions}</span>
              <br/>
              <span className="uq-stat left">Number of Correct Answers: </span>
              <span className="right">{this.state.correctAnswers}</span>
              <br/>
              <span className="uq-stat left">Number of Wrong Answers: </span>
              <span className="right">{this.state.wrongAnswers}</span>
              <br/>
              <span className="uq-stat left">Hints Used: </span>
              <span className="right">{this.state.hintsUsed}</span>
              <br/>
              <span className="uq-stat left">50-50 Used: </span>
              <span className="right">{this.state.usedFiftyFifty}</span>
            </div>
            <br/>
            <section className="uq-sum-ul-link">
              <ul>
                <li id="uq-sum-backbut" style={{display: 'inline-block'}}>
                  <Link id="q-sum-b-link" to="/games">Back to Games' Home</Link>
                </li>
                <li id="uq-sum-playmorebut" style={{display: 'inline-block'}}>
                  <Link id="q-sum-pm-link" to="/uq/play/uq-play">Play Again</Link>
                </li>
              </ul>
            </section>
          </main>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="uq-no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/games">Back to Games' Home</Link>
            </li>
            <li>
              <Link to="/uzoanya_quizz">Take a Quiz</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet><title>YGBC- UQ Summary</title></Helmet>
        {stats}
      </Fragment>
    );
  }
}

export default UQ_QuizSummary;
