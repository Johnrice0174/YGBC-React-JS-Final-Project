import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error from './components/Error';
/*------- YOUTUBE PART --------*/
import Youtube from './components/youtube/Youtube';
/*------- GAMES PART --------*/
import Games from './components/games/Games';
/*UzoanyaQuizz*/
import UzoanyaQuizz from './components/games/uzoanyaquizz/UzoanyaQuizz';
import UQ_QuizInstructions from './components/games/uzoanyaquizz/quiz/UQ_QuizInstructions';
import UQ_Play from './components/games/uzoanyaquizz/quiz/UQ_Play';
import UQ_QuizSummary from './components/games/uzoanyaquizz/quiz/UQ_QuizSummary';
/*KindsonQuizz*/
import KindsonQuizz from './components/games/kindsonquizz/KindsonQuizz';
/*NinjaQuizz*/
import NinjaQuizz from './components/games/ninjaquizz/NinjaQuizz';
/*TicTacToe*/
import TicTacToe from './components/games/tictactoe/TicTacToe';
/*Hangman*/
import Hangman from './components/games/hangman/Hangman';
/*JavaSnake*/
import Javasnake from './components/games/javasnake/Javasnake';
/*TypingSpeedCalculator*/
import TypingSpeedCalculator from './components/games/typingspeedcalculator/TypingSpeedCalculator';
/*------- CHAT PART --------*/
import Chat from './components/chat/Chat';
import LoginChat from './components/chat/login/Login';
import SignupChat from './components/chat/signup/Signup';
import DashboardChat from './components/chat/dashboard/Dashboard';
/*------- BLOG PART --------*/
import Blog from './components/blog/Blog';
/*------- OTHERS PART --------*/
import Others from './components/others/Others';
/*Weather*/
import Weather from './components/others/weather/Weather';
/*Recipes*/
import Recipes from './components/others/recipes/Recipes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        {/*------- YOUTUBE PART --------*/}
        <Route path='/youtube' component={Youtube} />
        {/*------- GAMES PART --------*/}
        <Route path='/games' component={Games} />
        {/*____UQ____*/}
        <Route path='/uzoanya_quizz' exact component={UzoanyaQuizz} />
        <Route path='/uq/play/instructions'exact component={UQ_QuizInstructions} />
        <Route path='/uq/play/uq-play'exact component={UQ_Play} />
        <Route path='/uq/play/uq-summary'exact component={UQ_QuizSummary} />
        {/*____KS____*/}
        <Route path='/kindson_quizz' exact component={KindsonQuizz} />
        {/*____NQ____*/}
        <Route path='/ninja_quizz' exact component={NinjaQuizz} />
        {/*____TTT____*/}
        <Route path='/tictactoe' exact component={TicTacToe} />
        {/*____HG____*/}
        <Route path='/hangman' exact component={Hangman} />
        {/*____JS____*/}
        <Route path='/javasnake' exact component={Javasnake} />
        {/*____TSC____*/}
        <Route path='/typingspeedcalculator' exact component={TypingSpeedCalculator} />
        {/*------- CHAT PART --------*/}
        <Route path='/chat' component={Chat} />
        <Route path='/chatlogin' component={LoginChat} />
        <Route path='/chatsignup' component={SignupChat} />
        <Route path='/chatdashboard' component={DashboardChat} />
        {/*------- BLOG PART --------*/}
        <Route path='/blog' component={Blog} />
        {/*------- OTHERS PART --------*/}
        <Route path='/others' component={Others} />
        {/*____W____*/}
        <Route path='/weather' component={Weather} />
        {/*____R____*/}
        <Route path='/recipes' component={Recipes} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
