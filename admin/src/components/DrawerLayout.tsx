import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDrawer } from '../hooks/useDrawer';
import { useModules } from '../hooks/useModules';
import AppToolbar from './AppToolbar';
import ModuleErrorBoundary from './ModuleErrorBoundary';
import shortid from 'shortid';

type Props = {
  drawerWidth?: number;
};

const DrawerLayout: FC<Props> = ({ drawerWidth = 240 }) => {
  const modules = useModules();
  const { isOpen: open, toggleDrawer: toggleOpen } = useDrawer();

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
              <Box
                display="flex"
                flex={1}
                textAlign="center"
                flexDirection="column">
                <Typography>Universal Admin</Typography>
                <Typography variant="subtitle2" color="GrayText">
                  <small>Version: v1.0.5</small>
                </Typography>
              </Box>
            </Box>
            <Divider />
            <List>
              {modules?.map((m) => (
                <m.Links key={shortid()} />
              ))}
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
        <AppToolbar drawerWidth={drawerWidth} />

        {/* Placeholder */}
        <Toolbar />

        <ModuleErrorBoundary>
          <Outlet />
        </ModuleErrorBoundary>
      </Box>
    </>
  );
};

export default DrawerLayout;
