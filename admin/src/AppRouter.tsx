import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useFirebase } from './FirebaseProvider';
import FullScreenLoader from './FullScreenLoader';
import { Box, Button } from '@mui/material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import DrawerLayout from './components/DrawerLayout';

const AppRouter = () => {
  const { firebaseApp, authenticated } = useFirebase();

  /**
   * Handles google login button click and initiates authentication with firebase's google provider.
   */
  const handleGoogleLogin = async () => {
    const auth = getAuth(firebaseApp);

    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  if (authenticated === undefined) {
    return <FullScreenLoader />;
  }

  if (authenticated === undefined) {
    return (
      <Box>
        To use admin panel please log in with your Google account
        <Button color="primary" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" Component={DrawerLayout} />
        <Route path="*">All path</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
