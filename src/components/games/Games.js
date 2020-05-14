import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import UzoanyaQuizz from './uzoanyaquizz/UzoanyaQuizz';
import KindsonQuizz from './kindsonquizz/KindsonQuizz';
import NinjaQuizz from './ninjaquizz/NinjaQuizz';
import TicTacToe from './tictactoe/TicTacToe';
import Hangman from './hangman/Hangman';
import Javasnake from './javasnake/Javasnake';
import TypingSpeedCalculator from './typingspeedcalculator/TypingSpeedCalculator';

const Games = () => {
  return (
    <div className='games'>
      <h1>GAMES</h1>
      <br/>
      <div className="navgame">
        <div className="navg-wrapper">
          <div className="navgcontainer">
            <Link to='/uzoanya_quizz' className='navgapp'>UzoanyaQuizz </Link>
            <Link to='/kindson_quizz' className='navgapp'>KindsonQuizz </Link>
            <Link to='/ninja_quizz' className='navgapp'>NinjaQuizz </Link>
            <Link to='/tictactoe' className='navgapp'>TicTacToe </Link>
            <Link to='/hangman' className='navgapp'>Hangman </Link>
            <a className='navgapp' href="https://johnrice0174.github.io/Hackathon_JavaSnake_Game/">JavaSnake</a>
            <Link to='/typingspeedcalculator' className='navgapp'>TypingSpeed </Link>
          </div>
        </div>
      </div>
      <br/>
      <Switch>
        <Route path='/' component={Games} exact />
        <Route path='/uzoanya_quizz' component={UzoanyaQuizz} />
        <Route path='/kindson_quizz' component={KindsonQuizz} />
        <Route path='/ninja_quizz' component={NinjaQuizz} />
        <Route path='/tictactoe' component={TicTacToe} />
        <Route path='/hangman' component={Hangman} />
        <Route path='/javasnake' component={Javasnake} />
        <Route path='/typingspeedcalculator' component={TypingSpeedCalculator} />
      </Switch>
      <br/>
      <div className="navmain">
        <img src="https://t3.ftcdn.net/jpg/02/43/40/98/240_F_243409810_C2rWCXa7xa6FPvjZ7jmgBaTuAMH0djuf.jpg" alt=""/>
      </div>
    </div>
  )
}
export default Games;
