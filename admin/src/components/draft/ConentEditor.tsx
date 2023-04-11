import {
  RawDraftContentState
} from 'draft-js';
import { FC } from 'react';

import { Box, useTheme } from '@mui/material';
import 'draft-js/dist/Draft.css';
import DraftEditorProvider from './DraftEditorProvider';
import RichEditor from './RichEditor';

type Props = {
  content: RawDraftContentState;
  onChange: (value: RawDraftContentState) => void;
};

const ContentEditor: FC<Props> = ({ content, onChange }) => {
  const theme = useTheme();

  return (
    <DraftEditorProvider>
      <Box
        p={2}
        sx={{
          border: `${theme.palette.primary.main} 2px solid`,
          borderRadius: 1
        }}>
        <RichEditor content={content} onChange={onChange} />
      </Box>
    </DraftEditorProvider>
  );
};

export default ContentEditor;
