import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Weather from './weather/Weather';
import Recipes from './recipes/Recipes';

const Others = () => {
  return (
    <div className='others'>
      <h1>OTHERS</h1>
      <br/>
      <div className="navothers">
        <div className="navo-wrapper">
          <div className="navocontainer">
            <Link to='/weather' className='navoapp'>Weather </Link>
            <Link to='/recipes' className='navoapp'>Recipes </Link>
          </div>
        </div>
      </div>
      <br/>
      <Switch>
        <Route path='/' component={Others} exact />
        <Route path='/weather' component={Weather} />
        <Route path='/recipes' component={Recipes} />
      </Switch>
      <br/>
      <div className="o-main">
        <a class="weather-preview" href="#"></a>
        <img src="https://zupimages.net/up/20/20/te0f.png" alt="" width="25%" height="300vh"/>
      </div>
    </div>
  )
}
export default Others;
