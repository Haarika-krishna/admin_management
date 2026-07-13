import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import "./adminlayout.css";

const AdminLayout = () => {
    return (
        <div className="admin-layout">

            <Sidebar />

            <div className="admin-content">
                <Topbar />   
                <Outlet />
            </div>

        </div>
    );
};

export default AdminLayout;