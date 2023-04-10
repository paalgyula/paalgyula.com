import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, useNavigate } from 'react-router-dom';
import AppToolbar from './AppToolbar';
import { useDrawer } from './contexts/DrawerProvider';

const drawerWidth = 240;

export default function DrawerLayout() {
  const navigate = useNavigate();
  const { open, toggleOpen } = useDrawer();

  return (
    <>
      <Drawer
        sx={{
          transition: 'width 200ms ease-in-out',
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 0,
            boxSizing: 'border-box'
          }
        }}
        open={open}
        variant="persistent"
        anchor="left">
        {open && (
          <>
            <Box display="flex" flexDirection="row" p={1}>
              <IconButton size="small" onClick={toggleOpen}>
                <ChevronLeftIcon />
              </IconButton>
              <Box display="flex" flex={1} textAlign="center" flexDirection="column">
                <Typography>Universal Admin</Typography>
                <Typography variant="subtitle2" color="GrayText">
                  <small>Version: v1.0.5</small>
                </Typography>
              </Box>
            </Box>
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
          </>
        )}
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
        <AppToolbar drawerWidth={drawerWidth}></AppToolbar>

        {/* Placeholder */}
        <Toolbar />

        <Outlet />
      </Box>
    </>
  );
}
