import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <p>Register a new account in a minute.</p>
            <input className="style" type="text" placeholder="Your Name" />
            <br />
            <input className="style" type="email" name="Email" id="" placeholder="Email Address" />
            <br />
            <input className="style" type="password" name="Password" id="" placeholder="Password" />
            <br />
            <button>Register</button>
            <p>or register with</p>
            <p>Already have an account?</p>
            <p>Login here</p>
        </div>
    );
};

export default Login;