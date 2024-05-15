import { Link, Outlet, useLocation } from "react-router-dom";
import './App.css';
import { NavBar } from "./shared/components/NavBar";
import VetMainBar from "./shared/components/VetMainBar";

function App() {
  const location = useLocation();
  const showNavBar = ["/","/homepage", "/createuser", "/login"].includes(location.pathname);

  return (
    <>
      {showNavBar && (
        <NavBar />
      )}
      {!showNavBar && <VetMainBar />}
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
