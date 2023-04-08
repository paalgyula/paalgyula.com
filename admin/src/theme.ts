import { LinkProps, createTheme } from '@mui/material';
import LinkBehavior from './components/RouterLink';

const theme = createTheme({
  shape: {
    borderRadius: 8
  },
  palette: {
    background: {
      default: '#f5f5f5'
    },
    primary: {
      main: '#566f7c'
    },
    secondary: {
      main: '#607d8b'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      },
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  }
});

export default theme;
