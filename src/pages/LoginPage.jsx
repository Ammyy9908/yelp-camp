import React from 'react';
import "./LoginPage.css"
import {Link} from 'react-router-dom';
function LoginPage() {
  return <div className='login-page'>
            <div className="login-page-main-container">
            <div className="login-header">
            <Link to="/"><img src="/assets/logo.svg" alt="" /></Link>
                <Link to="/browse">Back to campgrounds</Link>
            </div>

            <div className="login-page-content">
                <h2>Start exploring camps from all
around the world.</h2>
<div className="login-form">
    <div className="input-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder='johndoe_91'/>
    </div>
    <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter Your Password'/>
    </div>
    <input type="button" value="Login" className="login-btn" />
    <div className="auth-switch">Not a user yet? <Link to="/signup">Create an account</Link></div>
</div>
            </div>
            </div>
            <div className="login-page-testimonial">
                <div className="login-page-testimonial-content">
                    <h3>"YelpCamp has honestly
saved me hours of
research time, and the
camps on here are
definitely well picked and
added."</h3>
<div className="login-testimonial-user-meta">
    <img src="./assets/user-testimonial.svg" alt="" />
    <div className="testimonial-user-meta">
        <h4>May Andrews</h4>
        <p>Professional Hiker</p>
    </div>
</div>
                </div>
            </div>
         </div>;
}

export default LoginPage;
