import './Login.css'
import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h2>Please Login...</h2>
            <div style={{margin : '20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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