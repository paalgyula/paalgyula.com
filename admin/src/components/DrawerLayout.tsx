import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/material';
import AppToolbar from './AppToolbar';
import ContentEditor from './ContentEditor';
import { Outlet, useNavigate } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const drawerWidth = 240;

export default function DrawerLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="left">
        <Toolbar>
          <Box display="flex" flex={1} textAlign="center" flexDirection="column">
            <Typography>Universal Admin</Typography>
            <Typography variant="subtitle2" color="GrayText">
              <small>Version: v1.0.5</small>
            </Typography>
          </Box>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => navigate('/admin/tutorials')}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Tutorials" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <Box
        component="main"
        flex={1}
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{ bgcolor: 'background.default', p: 3 }}>
        <AppToolbar drawerWidth={drawerWidth} />

        {/* Placeholder */}
        <Toolbar />

        <Outlet />
      </Box>
    </>
  );
}
