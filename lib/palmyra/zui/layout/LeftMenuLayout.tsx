import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import {Sidebar} from "./Sidebar";

interface MainLayoutInput {
    sideBarWidth?: string,
    LeftMenu: React.FC,
    appTitle: string
}

const LeftMenuLayout = (props: MainLayoutInput) => {
    var width = props.sideBarWidth;
    if (!width) {
        width = '250px';
    }

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <div > TopBar </div>
            <Sidebar LeftMenu={props.LeftMenu}
                appTitle={props.appTitle} width={width} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: `calc(100% - ${width})`,
                    minHeight: "100vh"
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export type { MainLayoutInput};
export { LeftMenuLayout };