import React from 'react';
import "./LoginPage.css"
import {Link} from 'react-router-dom';
import signup from '../utils/signup';
import Cookies from 'js-cookie';
function SignUp() {

    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");

    const handleSignup = (e)=>{
        signup(username,password).then((data)=>{
            const {error,token} = data;
            if(error){
                return alert(error);
            }
            Cookies.set('jwt-token',token);
            window.location.href = '/browse';
        })
    }


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
        <input type="text" id="username" placeholder='johndoe_91' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>

    <input type="button" value="Create an account" className="signup-btn" onClick={handleSignup}/>
    <div className="auth-switch">Already a user? <Link to="/login">Signin</Link></div>
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
    <img src="/assets/user-testimonial.svg" alt="" />
    <div className="testimonial-user-meta">
        <h4>May Andrews</h4>
        <p>Professional Hiker</p>
    </div>
</div>
                </div>
            </div>
         </div>;
}

export default SignUp;
