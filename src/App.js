import { useState, React } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomePage from "./pages/homePage/HomePage";
import "./_app.scss";
// import LoginPage from "./pages/loginPage/LoginPage";

const App = () => {
  // Sidebar toggle handler
  const [sidebar, toggleSidebar] = useState(false);
  const toggleSidebarHandler = () => toggleSidebar((value) => !value);

  return (
    <div>
      <Header toggleSidebarHandler={toggleSidebarHandler} />
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          toggleSidebarHandler={toggleSidebarHandler}
        />
        <Container className="app__main">
          <HomePage />
        </Container>
      </div>
    </div>
    // <LoginPage />
  );
};

export default App;
