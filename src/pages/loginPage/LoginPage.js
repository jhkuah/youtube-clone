import React, { useEffect } from "react";
import "./_loginPage.scss";
import {login} from "../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const loginHandler = async () => {
    await login(dispatch);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freepnglogos.com/uploads/youtube-vector-logo-png-9.png"
          alt=""
        />
        <button onClick={loginHandler}>Login with Google</button>
        <p>This project is made using React and Youtube API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
