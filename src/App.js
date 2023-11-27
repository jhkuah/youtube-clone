import { useState, React, useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import WatchPage from "./pages/watchPage/WatchPage";

import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import "./_app.scss";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const toggleSidebarHandler = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header toggleSidebarHandler={toggleSidebarHandler} />
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          toggleSidebarHandler={toggleSidebarHandler}
        />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
        exact
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
