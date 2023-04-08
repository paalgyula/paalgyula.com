import { Box, CircularProgress, Typography } from '@mui/material';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function FullScreenLoader() {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="row"
      alignItems="center"
      alignContent="center"
      justifyContent="center">
      <Box textAlign="center">
        <CircularProgress size={30} variant="indeterminate" />
        <Typography variant="subtitle1">Loading...</Typography>
      </Box>
    </Box>
  );
}
