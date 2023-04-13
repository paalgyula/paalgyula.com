import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AppRouter from './AppRouter';
import FirebaseProvider from './providers/FirebaseProvider';
import AppStateProvider from './providers/AppStateProvider';

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        component="main"
        sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
        {/* <Suspense fallback={<FullScreenLoader />}> */}
        <FirebaseProvider>
          <AppStateProvider>
            <AppRouter />
          </AppStateProvider>
        </FirebaseProvider>
        {/* </Suspense> */}
      </Box>
    </LocalizationProvider>
  );
}
