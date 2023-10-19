
import { Drawer, List, Stack, Toolbar, Typography } from "@mui/material";
import LayoutConfigs from '../../configs/LayoutConfigs';

import '../common/Sidebar.scss';
import ApplicationMenu from "../../components/layout/ApplicationMenu";


const Sidebar = () => {
  let container = document.body;

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
              PoshaQ Tracker
            </Typography>
          </Stack>
        </Toolbar>
      </div>
      <div className='sidebar-middle'>
        <ApplicationMenu />
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
          boxSizing: 'border-box', width: LayoutConfigs.sidebar.width,
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
          width: LayoutConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: LayoutConfigs.sidebar.width,
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
export default Sidebar;