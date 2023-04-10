import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useFirebase } from './firebase/FirebaseProvider';
import FullScreenLoader from './components/FullScreenLoader';
import { Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import DrawerLayout from './components/DrawerLayout';
import LoginScreen from './components/auth/LoginScreen';
import { lazy } from 'react';
import TutorialsPage from './pages/TutorialsPage';
import TutorialEditor from './components/tutorials/TutorialEditor';
import TutorialList from './components/tutorials/TutorialList';
import DrawerProvider from './components/contexts/DrawerProvider';

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
      <DrawerProvider>
        <Routes>
          <Route path="/admin" Component={DrawerLayout}>
            <Route path="tutorials" Component={TutorialsPage}>
              <Route path="" Component={TutorialList} />
              <Route path="new" Component={Box}/>
              <Route path=":id" Component={TutorialEditor} />
            </Route>
          </Route>
          <Route path="*">All path</Route>
        </Routes>
      </DrawerProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
