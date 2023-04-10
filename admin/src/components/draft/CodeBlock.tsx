import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import '../../one-dark.min.css';
import Highlight from 'react-highlight';

type Props = {
  highlight?: boolean;
};

const CodeBlock: FC<PropsWithChildren<Props>> = ({
  children,
  highlight = false
}) => {
  return (
    <Box
      border={1}
      borderColor="rgba(0,0,0,0.1)"
      borderRadius={2}
      bgcolor="#282c34"
      fontSize={11}
      color="#98c379"
      p={2}>
      <code>{highlight ? <Highlight>{children}</Highlight> : children}</code>
    </Box>
  );
};

export default CodeBlock;
