import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { useDrawer } from '../hooks/useDrawer';
import ProfileMenu from './auth/UserDropdown';
import Breadcrumbs from './Breadcrumbs';

type Props = {
  title?: string;
  drawerWidth: number;
};

const AppToolbar: FC<PropsWithChildren<Props>> = ({
  children,
  drawerWidth,
  title = ''
}) => {
  const { toggleDrawer: toggleOpen, isOpen: open } = useDrawer();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
        ml: `${drawerWidth}px`,
        transition: `all 200ms ease-in-out`
      }}>
      <Toolbar>
        {!open && (
          <IconButton color="inherit" onClick={toggleOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <Breadcrumbs />
        <Box flex={1}>{children}</Box>
        <Box>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
