import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form action="">
                <input type="text" placeholder='Type Your Name' /> <br />
                <input type="email" name="" id="" placeholder='Type Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Type Password' /> <br />
                <input type="Submit" value='Register' />
            </form>
            
        </div>
    );
};

export default Register;