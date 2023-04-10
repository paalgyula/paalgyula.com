import { AppBar, Box, Breadcrumbs, IconButton, Toolbar, Typography } from '@mui/material';
import ProfileMenu from './auth/ProfileMenu';
import { FC, PropsWithChildren } from 'react';
import { useDrawer } from './contexts/DrawerProvider';
import app from '../firebaseApp';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  title?: string;
  drawerWidth: number;
};

const AppToolbar: FC<PropsWithChildren<Props>> = ({ children, drawerWidth, title = '' }) => {
  const { toggleOpen, open, breadcrumb, documentTitle } = useDrawer();

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
        {breadcrumb && (
          <>
            <Box pl={2} />
            <Breadcrumbs sx={{ color: '#fff' }} separator="›" aria-label="breadcrumb">
              {breadcrumb}
              {documentTitle && (
                <Typography key="3" color="inherit">
                  {documentTitle}
                </Typography>
              )}
            </Breadcrumbs>
          </>
        )}
        <Box flex={1}>{children}</Box>
        <Box>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
