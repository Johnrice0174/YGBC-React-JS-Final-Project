import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, Switch, Link}  from 'react-router-dom';

class Blog extends React.Component {

  render() {
    return (
      <div className="blog-backg">
        <Helmet><title>YGBC- Blog</title></Helmet>
        <h1>BLOG</h1>
        <br/>
        <div className="navblog">
          <div className="navb-wrapper">
            <div className="navbcontainer">
              <Link to='/blog' className='navbapp'>Login </Link>
              <Link to='/blog' className='navbapp'>Register </Link>
              <Link to='/blog' className='navbapp'>My Blog </Link>
            </div>
          </div>
        </div>
        <br/>
        <div className="blogmain">
          <p>Sorry the blog is unusable, come back later...</p>
          <img src="https://www.zupimages.net/up/19/44/d87z.jpg" alt="" width="30%" height="300vh"/>
        </div>
      </div>
    )
  }
}


export default Blog;
