import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Component, ReactNode } from 'react';

export default class ModuleErrorBoundary extends Component<
  { children?: ReactNode },
  { eventId: string; hasError: boolean; error?: any }
> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { eventId: '', hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log('here get Derived');
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ ...this.state, error });
    console.warn(errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Typography variant="h3">Woops!</Typography>
          <ButtonGroup>
            <Button onClick={() => console.error('Error Found', error)}>
              Report feedback
            </Button>
          </ButtonGroup>
        </Box>
      );
    }

    return children;
  }
}
