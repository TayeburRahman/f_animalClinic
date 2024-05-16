import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import SelectionBar from "./SelectionBar";
import VetMainBar from "./VetMainBar";

function Layout({ children }) {
    return (

        <div className="main-layout">
            <Container>
            <VetMainBar />
            <div className="layout-container">
                <SelectionBar />
                <Outlet />
            </div>``
            </Container>
        </div>
    );
}

export default Layout;
