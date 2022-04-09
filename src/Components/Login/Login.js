import './Login.css'
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const form = location?.state?.from.pathname || '/'
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(()=>{
            navigate(form , {replace : true})
        })
    }
    return (
        <div>
            <h2>Please Login...</h2>
            <div style={{margin : '20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" name="" id="" placeholder='Type Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Type Password' /> <br />
                <input type="Submit" value='Login'  />
            </form>
        </div>
    );
};

export default Login;