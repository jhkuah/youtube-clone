import { useState, React, useEffect } from "react";
import { Container } from "react-bootstrap";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";

import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';

import "./_app.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebarHandler = () => setSidebar((value) => !value);

  return (
    <>
      <Header toggleSidebarHandler={toggleSidebarHandler} />
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          toggleSidebarHandler={toggleSidebarHandler}
        />
        <Container className="app__home">
          <HomePage />
        </Container>
      </div>
      ;
    </>
  );
}

const App = () => {

  const {accessToken, loading} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  useEffect(() =>{
    if(!loading && !accessToken){
      navigate('/login')
    }
  }, [accessToken, loading, navigate])
  return (
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<h1>Search Results</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default App;
