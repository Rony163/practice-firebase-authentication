import React from 'react';
import './Login.css';
import loginImage from '../../images/loginimage.png';

const Login = () => {
    return (
        <div className="container">
            <div className="d-flex login-container">
                <div>
                    <h1>Create an account</h1>
                    <p>Register a new account in a minute.</p>
                    <input className="style" type="text" placeholder="Your Name" />
                    <br />
                    <input className="style" type="email" name="Email" id="" placeholder="Email Address" />
                    <br />
                    <input className="style" type="password" name="Password" id="" placeholder="Password" />
                    <br />
                    <button className="style register-design">Register</button>
                    <p className="ms-5 ps-3"><small>or register with</small></p>
                    <div className="login-icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-google"></i>
                        <i class="fab fa-github"></i>
                    </div>
                    <p>Already have an account?</p>
                    <p>Login here</p>
                </div>
                <div>
                    <img src={loginImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;