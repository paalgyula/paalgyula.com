import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ProfileMenu from './auth/ProfileMenu';
import { FC, PropsWithChildren } from 'react';

type Props = {
  title?: string;
  drawerWidth: number;
};

const AppToolbar: FC<PropsWithChildren<Props>> = ({
  children,
  drawerWidth,
  title = 'Permanent drawer'
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <Box flex={1}>{children}</Box>
        <Box>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
