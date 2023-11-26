import React from 'react'
import './_loginPage.scss'
const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freepnglogos.com/uploads/youtube-vector-logo-png-9.png"
          alt=""
        />
        <button>
            Login with Google
        </button>
        <p>This project is made using React and Youtube API</p>
      </div>
    </div>
  );
}

export default LoginScreen