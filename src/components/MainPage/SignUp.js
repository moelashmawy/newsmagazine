import React from 'react';

function SignUp(props) {

    return (
        <div className="signup">
            <div className="title">
                <span className="signup-icon"></span>
                <p>Sign up for our Newsletter</p>
            </div>
            <a href="/signup" className="signup-1b">SIGN UP</a>
            <br />
            <a href="/update" className="signup-2b">Update your preferences »</a>
        </div>
    )
}

export default SignUp;