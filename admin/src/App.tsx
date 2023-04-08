import Box from '@mui/material/Box';
import { Suspense, lazy } from 'react';
import FullScreenLoader from './FullScreenLoader';
import { useFirebase } from './FirebaseProvider';
import { getAuth } from 'firebase/auth';

const DrawerLayout = lazy(() => import('./components/DrawerLayout'));
const AppRouter = lazy(() => import('./AppRouter'));

export default function App() {
  const { firebaseApp } = useFirebase();

  return (
    <Box component="main" sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Suspense fallback={<>Loading...</>}>
        {/* <DrawerLayout /> */}
        {/* <FullScreenLoader /> */}
        <AppRouter />
      </Suspense>
    </Box>
  );
}
