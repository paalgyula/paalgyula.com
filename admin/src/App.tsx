import Box from '@mui/material/Box';
import { Suspense, lazy } from 'react';
import FullScreenLoader from './components/FullScreenLoader';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const AppRouter = lazy(() => import('./AppRouter'));

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box component="main" sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
        <Suspense fallback={<FullScreenLoader />}>
          <AppRouter />
        </Suspense>
      </Box>
    </LocalizationProvider>
  );
}
