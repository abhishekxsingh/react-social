import './index.css';

function Login (props) {
    return(
        <div>
            <h1>Login form</h1>
            {/* <a href="http://127.0.0.1:5500/signup.html">Signup</a> */}
            <form>
                <div className="headingsContainer">
                    <h3>Sign in</h3>
                </div>
                <div className="mainContainer">
                    <label for="username">Your username</label>
                    <input type="text" placeholder="Enter Username" name="username" id="email" required/>
                    <label for="pswrd">Your password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required/>
                    <div id="error"></div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;