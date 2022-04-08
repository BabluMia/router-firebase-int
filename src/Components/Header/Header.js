import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const {user , handleSignOut} = useFirebase()
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/order'>Order</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid ? <button onClick={handleSignOut}>Sign Out</button> :<Link to='/login'>Login</Link>
            }
            
        </div>
    );
};

export default Header;