import React, {Fragment} from 'react'
import './index.css';

function Signup (props) {
    return (
    <Fragment>
        <h1>Signup form</h1>
        <div className="link">
            <a href="http://127.0.0.1:5500/login-page.html">login</a>
        </div>
        <form onsubmit="signup(event)">
            <div className="headingsContainer">
                <h3>Sign in</h3>
            </div>
            <div className="mainContainer">
                <label for="username">Your username</label>
                <input type="text" placeholder="Enter username" name="username" id="userName" required />
                <label for="Your name">Your name</label>
                <input type="text" placeholder="Enter name" name="name" id="name" required />
                <label for="name">Email</label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />
                <label for="mobile number">Mobile number</label>
                <input type="text" placeholder="mobile number" name="mobileNumber" id="mobileNumber" required />
                <label for="password">Your password</label>
                <input type="password" placeholder="password" name="password" id="password" required />
                <label for="pswrd">Confirm password</label>
                <input type="password" placeholder="Enter confirmPassword" name="confirmpassword" id="confirmPassword" required />
                <div id="error"></div>
                <button type="submit">Signup</button>
            </div>
        </form>
    </Fragment>
    
    );
}

export default Signup;