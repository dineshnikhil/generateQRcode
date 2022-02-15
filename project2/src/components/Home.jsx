import React, { useState } from 'react';
import Nav from './Nav';

import './Home.css';

function Home() {

    const [textinput, setTextinput] = useState('');
    const [word, setWord] = useState('example');

    function getQRCodeHandler() {
        setWord(textinput)
    }

  return (
      <div className="home-div">
          <div className="child-one">
            <Nav />
            <div className='info'>
                <h1 className='info-heading'>Generate QR Code</h1>
                <h2>For Your Custom Text By Click Of A Button</h2>
                <p>
                    By Creating the account you can watch your history and you get access to many more additional Features.
                </p>
                <button className='createAccount-btn'>
                    Create Account
                </button>
            </div>
          </div>
          <div className="child-two">
            <div>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`} alt="genrated qr code image." id='qr-code-img' />
                <div className="form-div">
                    <textarea name="" id="" cols="30" rows="6" onChange={(e) => {
                        setTextinput(e.target.value)
                    }}>
                        Write your text here..
                    </textarea>
                    <button className='get-btn' onClick={getQRCodeHandler}>
                        Get Your QR Code
                    </button>
                    <a id="download-btn" href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`} download target="_blank">
                        <button className='get-btn'>
                            Download QR Code
                        </button>
                    </a>
                </div>
            </div>
          </div>
      </div>
  );
}

export default Home;
