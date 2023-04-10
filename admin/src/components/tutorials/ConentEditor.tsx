import {
  ContentState,
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  RawDraftContentState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  Modifier
} from 'draft-js';
import { FC, useState } from 'react';

import CodeIcon from '@mui/icons-material/Code';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUndelinedIcon from '@mui/icons-material/FormatUnderlined';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import 'draft-js/dist/Draft.css';
import { Map } from 'immutable';
import CodeBlock from '../draft/CodeBlock';

type Props = {
  content: RawDraftContentState;
  onChange: (value: RawDraftContentState) => void;
};

const blockRenderMap = Map({
  'code-block2': {
    // element is used during paste or html conversion to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: 'code-block2',
    wrapper: <CodeBlock />
  }
});

const convertData = (content: RawDraftContentState): EditorState => {
  try {
    return EditorState.createWithContent(convertFromRaw(content))
  } catch (err) {
    console.warn('Wrong data arrived, editor initialized with empty state!', err)
    return EditorState.createEmpty()
  }
}

// keep support for other draft default block types and add our myCustomBlock type
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const ContentEditor: FC<Props> = ({ content, onChange = () => {} }) => {
  const theme = useTheme();

  const [editorState, setEditorState] = useState<EditorState>(convertData(content));

  const onContentChange = (newState: EditorState) => {
    setEditorState(newState);
    onChange(convertToRaw(editorState.getCurrentContent()));
  };

  const toggleStyle = (style: string) => {
    setEditorState((current) => RichUtils.toggleInlineStyle(current, style));
  };

  const handleCodeBlock = () => {
    setEditorState((state) => {
      // Modifier.setBlockData(state, )
      
      return RichUtils.toggleBlockType(state, 'code-block2')
    });
  };

  return (
    <Box
      p={2}
      sx={{
        border: `${theme.palette.primary.main} 2px solid`,
        borderRadius: 1
      }}>
      <Box display="flex" alignItems="center">
        <IconButton size="small" onClick={() => toggleStyle('BOLD')}>
          <FormatBoldIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => toggleStyle('ITALIC')}>
          <FormatItalicIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => toggleStyle('UNDERLINE')}>
          <FormatUndelinedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" sx={{ height: 18, mx: 1 }} />

        <IconButton size="small" onClick={handleCodeBlock}>
          <CodeIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box pb={2} />
      <Editor
        blockRenderMap={extendedBlockRenderMap}
        preserveSelectionOnBlur
        editorState={editorState}
        onChange={onContentChange}
      />
    </Box>
  );
};

export default ContentEditor;
