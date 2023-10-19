
import { Drawer, List, Stack, Toolbar, Typography } from "@mui/material";

import './Sidebar.scss';


interface SidebarInput {
  LeftMenu:React.FC, 
  appTitle:string, 
  width:string
}


const Sidebar = (props:SidebarInput) => {
  let container = document.body;
  const Menu = props.LeftMenu;
  const sideBarWidth = props.width;

  let handleDrawerToggle = function () {
  };

  let responsive = false;

  let drawerList = <List disablePadding>
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            position={'relative'}
            justifyContent="center"
          >
            <Typography variant="h6">
              {props.appTitle}
            </Typography>
          </Stack>
        </Toolbar>
      </div>
      <div className='sidebar-middle'>
        <Menu />
      </div>

      <div className='sidebar-footer'>
        <p className='sidebar-footer-text'>Powered by Palmyra</p>
      </div>
    </div>
  </List>;





  if (responsive) {
    return <Drawer
      container={container}
      variant="temporary"
      open={true}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: 'block',
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box', width: sideBarWidth,
          backgroundColor: "#2A3F54",
          color: "#ffffffef"
        },
      }}
    >
      {drawerList}
    </Drawer>;
  } else
    return (

      <Drawer
        variant="permanent"
        sx={{
          width: sideBarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sideBarWidth,
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: "#2A3F54",
            color: "#ffffffef"
          }
        }}
      >

        {drawerList}

      </Drawer>
    );
};


export {Sidebar};

export type {SidebarInput};