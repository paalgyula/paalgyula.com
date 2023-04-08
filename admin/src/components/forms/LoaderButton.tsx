import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = {
  loading?: boolean;
};

const LoaderButton: FC<PropsWithChildren<ButtonProps & Props>> = ({
  disabled,
  children,
  loading = false,
  ...props
}) => {
  return (
    <Button
      startIcon={loading ? <CircularProgress size={16} color="primary" /> : null}
      disabled={disabled || loading}
      {...props}>
      {children}
    </Button>
  );
};

export default LoaderButton;
