import Box from '@mui/material/Box';
import { Suspense, lazy } from 'react';
import { useFirebase } from './FirebaseProvider';
import FullScreenLoader from './FullScreenLoader';

const AppRouter = lazy(() => import('./AppRouter'));

export default function App() {
  const { firebaseApp } = useFirebase();

  return (
    <Box component="main" sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Suspense fallback={<FullScreenLoader />}>
        <AppRouter />
      </Suspense>
    </Box>
  );
}
