import SelectionBar from "./SelectionBar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import VetMainBar from "./VetMainBar";
import CustomBottomNavigation from "./BottomNav";

function Layout({ children }) {
    return (

        <div className="main-layout">
            <VetMainBar />
            <div className="layout-container">
                <SelectionBar />
                <Outlet />
            </div>
            <CustomBottomNavigation />
        </div>
    );
}

export default Layout;
