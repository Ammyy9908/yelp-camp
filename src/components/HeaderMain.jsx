import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
function HeaderMain({user}) {
  return <div className="search-page-header">
  <div className="search-page-header-left">
      <Link to="/" className='logo'>
          <img src="/assets/logo.svg" alt="" />
      </Link>
      <Link to="/" className='link'>Home</Link>
  </div>

  <div className="search-page-heade-right">
      {!user && <div className="auth-links">
      <Link to="/login" className="login-text-btn">Login</Link>
      <Link to="/signup" className='new-account-btn'>Create an account</Link>
      </div>}

      {user && <div className="authenticated-links">
          <span>{user.name}</span>
            <Link to="/logout" className='logout-btn'>Logout</Link>
      </div>}
      <button className="hamburger">
          <img src="/assets/menu.svg" alt="" />
      </button>
  </div>
</div>;
}


const mapStateToProps = (state)=>({
    user:state.appReducer.user
})

export default connect(mapStateToProps,null)(HeaderMain);
