import { Box, Typography } from '@mui/material';
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
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets7.lottiefiles.com/packages/lf20_Guf7n8.json"
          style={{ height: '400px', width: '400px' }}
        />
        <Typography variant="h2">Loading...</Typography>
      </Box>
    </Box>
  );
}
