import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, Switch, Link}  from 'react-router-dom';
import LoginChat from './login/Login';
import SignupChat from './signup/Signup';
import DashboardChat from './dashboard/Dashboard';

class Chat extends React.Component {

  render() {
    return (
      <div className="chat-backg">
        <Helmet><title>YGBC- Chat</title></Helmet>
        <h1>CHAT</h1>
        <br/>
        <div className="navchat">
          <div className="navc-wrapper">
            <div className="navc-container">
              <Link to='/chatlogin' className='navcapp'>Login </Link>
              <Link to='/chatsignup' className='navcapp'>Register </Link>
              <Link to='/chatdashboard' className='navcapp'>My Chat </Link>
            </div>
          </div>
        </div>
        <br/>
        <Switch>
          <Route path='/chatlogin' component={LoginChat} exact />
          <Route path='/chatsignup' component={SignupChat} />
          <Route path='/chatdashboard' component={DashboardChat} />
        </Switch>
      </div>
    )
  }
}


export default Chat;
