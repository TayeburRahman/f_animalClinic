import SelectionBar from "./SelectionBar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import VetMainBar from "./VetMainBar";

function Layout({ children }) {
    return (

        <div className="main-layout">
            <VetMainBar />
            <div className="layout-container">
                <SelectionBar />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
