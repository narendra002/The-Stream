import React, { useState } from 'react';
import "./Signup.scss"
import TextField from '@mui/material/TextField';

const Signup = () => {

    return (

        <div className='signupmain'>
            <div className='Signup_container'>
                <div className='Signup'>
                    <h1>Sign up</h1>
                    <TextField label="username" className='Email' />
                    <TextField label="E-mail" variant="outlined" className='Email' />
                    <TextField label=" Create Strong Password" variant="outlined" className='Email' />

                </div>
                <div className='Alredyacc'>
                    <h>Already have an account? <a href='./signin'>Login</a></h>
                    <button className='Loginbtn'>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
