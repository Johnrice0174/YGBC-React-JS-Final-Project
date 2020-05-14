import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import answer from '../assets/img/answer.png';
import fiftyFifty from '../assets/img/fiftyFifty.png';
import hints from '../assets/img/hints.png';
import options from '../assets/img/options.png';

const UQ_QuizInstructions = () => (
  <Fragment>
    <Helmet><title>YGBC-UQ-Instructions</title></Helmet>
    <div className="uq-instructions container">
      <h1>How to Play the Game</h1>
      <p>Ensure you read this guide from start to finish.</p>
      <ul className="uq-browser-default" id="uq-main-list">
        <li><b>x)</b>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
        <li><b>x)</b>Each game consists of 15 questions.</li>
        <li>
          <b>x)</b>Every questions contains 4 options.<br/>
          <img src={options} alt="Quizz App options example" width="80%"/>
        </li>
        <li>
          <b>x)</b>Select the option which best answers the question by clicking (or selecting) it.
          <img src={answer} alt="Quiz App anszwer example" width="80%"/>
        </li>
        <li>
          <b>x)</b>Each game has 2 lifelines namely:
          <ul id="uq-sublist">
            <li>2 50-50 chances</li>
            <li>5 Hints</li>
          </ul>
        </li>
        <li>
          <b>x)</b>Selecting a 50-50 lifeline by clicking the icon
          <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
          will remove 2 wrong answers, leaving the correct answer and one wrong answer.
          <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example" width="80%"/>
        </li>
        <li>
          <b>x)</b>Using a hint by clicking the icon
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
          will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
          <br/>
          <img src={hints} alt="Quiz App hints example" width="80%"/>
        </li>
        <li><b>x)</b>Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</li>
        <li><b>x)</b>The timer starts as soon as the game loads.</li>
        <li><b>x)</b>Let's do this if you think you've got what it takes?</li>
      </ul>
      <div>
        <span className="left uq-inst-but"><Link to="/games">No, take me back</Link></span>
        <span className="right uq-inst-but"><Link to="/uq/play/uq-play">Okay let's play!</Link></span>
      </div>
    </div>
  </Fragment>
);

export default UQ_QuizInstructions;
