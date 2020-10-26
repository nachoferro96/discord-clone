import React from 'react'
import "./login.css"
import Button from "@material-ui/core/Button"
import { auth, provider } from "./firebase";

function Login() {
    const signin = () => {
        auth.signInWithPopup(provider).catch(error =>alert(error.message))

    };

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo,svg.png" alt="asd"/>
            </div>

            <Button onClick={signin}>Sign In</Button>

        </div>
    )
}

export default Login
