import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useFirebase } from './firebase/FirebaseProvider';
import FullScreenLoader from './components/FullScreenLoader';
import { Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import DrawerLayout from './components/DrawerLayout';
import LoginScreen from './components/auth/LoginScreen';
import { lazy } from 'react';
import TutorialsPage from './pages/TutorialsPage';

const DrawerLayout = lazy(() => import('./components/DrawerLayout'));

const AppRouter = () => {
  const { authenticated } = useFirebase();

  if (authenticated === undefined) {
    return <FullScreenLoader />;
  }

  if (!authenticated) {
    return <LoginScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" Component={DrawerLayout}>
          <Route path="tutorials" Component={TutorialsPage} />
        </Route>
        <Route path="*">All path</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
