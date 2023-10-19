import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import LayoutConfigs from "../../configs/LayoutConfigs";

import Sidebar from "../common/Sidebar";

const MainLayout = () => {

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <div > TopBar </div>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: `calc(100% - ${LayoutConfigs.sidebar.width})`,
                    minHeight: "100vh"
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;