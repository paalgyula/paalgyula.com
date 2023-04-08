import { Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useFirebase } from '../../firebase/FirebaseProvider';

const LoginScreen = () => {
  const { loginWithGoogle } = useFirebase();

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      justifyContent="center">
      <Box flex={1}></Box>
      <Box width={400}>
        <Card elevation={6}>
          <CardHeader title="Welcome"></CardHeader>
          <CardContent>
            To use admin panel please log in with your <b>Google account</b>
          </CardContent>
          <CardActions>
            <Box flex={1} />
            <Button color="primary" variant="contained" onClick={loginWithGoogle}>
              Sign in with Google
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box flex={1}></Box>
      <Box textAlign="center">
        <small>Made with ❤️ by Paal Gyula</small>
        <p>No rights reserved</p>
      </Box>
    </Box>
  );
};

export default LoginScreen;
