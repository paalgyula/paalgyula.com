import { Box, CircularProgress, Typography } from '@mui/material';

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
