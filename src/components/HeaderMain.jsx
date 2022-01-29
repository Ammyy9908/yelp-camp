import React from 'react';
import {Link} from 'react-router-dom';
function HeaderMain() {
  return <div className="search-page-header">
  <div className="search-page-header-left">
      <Link to="/" className='logo'>
          <img src="/assets/logo.svg" alt="" />
      </Link>
      <Link to="/" className='link'>Home</Link>
  </div>

  <div className="search-page-heade-right">
      <div className="auth-links">
      <Link to="/login" className="login-text-btn">Login</Link>
      <Link to="/signup" className='new-account-btn'>Create an account</Link>
      </div>
      <button className="hamburger">
          <img src="/assets/menu.svg" alt="" />
      </button>
  </div>
</div>;
}

export default HeaderMain;
