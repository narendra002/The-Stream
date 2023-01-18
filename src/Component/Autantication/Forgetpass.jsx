import React from 'react';
import "./Forgetpass.scss"
import OtpInput from 'react-otp-input';
import TextField from '@mui/material/TextField';

const Forgetpass = () => {

    const move = (totext) => {

        document.getElementById(totext).focus();

    }

    const verify = () => {

    }
    return (
        <>
            <div className='forgetmain'>
                <div className='container'>
                    <div className='reset'>
                        <h1>Reset password</h1>
                        <TextField label="E-mail" variant="outlined" className='resetEmail' />

                        <div class="code-container">

                            <input type="text" class="otp" id='1' maxlength="1" onKeyUp={() => move('2')}></input>
                            <input type="text" class="otp" id='2' maxlength="1" onKeyUp={() => move('3')}></input>
                            <input type="text" class="otp" id='3' maxlength="1" onKeyUp={() => move('4')}></input>
                            <input type="text" class="otp" id='4' maxlength="1" onKeyUp={() => move('5')}></input>
                            <input type="text" class="otp" id='5' maxlength="1" ></input>
                        </div>
                        <button className='Verify' onClick={() => verify()}>Verify</button>
                    </div>
                </div>
            </div>

        </>
    );


};
export default Forgetpass;
