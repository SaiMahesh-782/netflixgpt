import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    const toggleForm = () => {
        setSignIn(!signIn);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="BG"
                />
            </div>
            <form className="relative p-12 w-3/12 bg-black rounded-lg shadow-lg" action="">
                <h1 className='font-bold text-3xl p-4 text-white'>Sign {signIn ? 'In' : 'Up'}</h1>
                <input type="text" placeholder='Email or Phone number' className='my-4 p-4 block bg-transparent border border-gray-500 w-full' />
                {!signIn &&(
                    <input type="text" placeholder='Enter The name' className='my-4 p-4 block bg-transparent border border-gray-500 w-full' />
                )}
                <input type="text" placeholder='Password' className='my-4 p-4 block bg-transparent border border-gray-500 w-full' />
                <button className='p-4 my-6 block w-full bg-red-500 text-white rounded-md' type="submit">{signIn ? 'SIGN IN' : 'SIGN UP'}</button>
                <p className='text-white font-semibold cursor-pointer' onClick={toggleForm}>
                    {signIn ? 'New to Netflix? Sign Up' : 'Already a member? Sign In'}
                </p>
            </form>
        </div>
    );
};

export default Login;
