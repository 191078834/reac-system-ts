import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems, mainNavBarItem } from './const/navbarListItems';
//useParams
import { To, useNavigate } from "react-router-dom";

const drawerWidth = 220;

const Navbar: React.FC<{}> = () => {
  let navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#CC0066',
          color: 'rgb(255, 255, 255, 0.7)'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {mainNavBarItems.map((item: mainNavBarItem) => (
          <ListItem button
            key={item.id}
            disablePadding
            onClick={() => navigate(item.route as To)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(255, 255, 255, 0.7)' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default Navbar
