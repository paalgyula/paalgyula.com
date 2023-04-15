import {
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  Modifier,
  RawDraftContentState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from 'draft-js';

import CodeIcon from '@mui/icons-material/Code';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUndelinedIcon from '@mui/icons-material/FormatUnderlined';
import { Box, Divider, IconButton } from '@mui/material';
import 'draft-js/dist/Draft.css';
import { Map } from 'immutable';
import CodeBlock from './blocks/CodeBlock';
import { useEditorState } from './DraftEditorProvider';
import { FC, useEffect } from 'react';

const convertData = (content?: RawDraftContentState): EditorState => {
  if (!content) {
    return EditorState.createEmpty();
  }

  try {
    return EditorState.createWithContent(convertFromRaw(content));
  } catch (err) {
    console.warn(
      'Wrong data arrived, editor initialized with empty state!',
      err
    );
    return EditorState.createEmpty();
  }
};

const blockRenderMap = Map({
  'code-block2': {
    // element is used during paste or html conversion
    // to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: 'code-block2',
    wrapper: <CodeBlock />
  }
});

// keep support for other draft default block types and
// add our myCustomBlock type
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const RichEditor: FC<{
  onChange: (data: RawDraftContentState) => void;
  content?: RawDraftContentState;
}> = ({ onChange, content }) => {
  const { editorState, setEditorState } = useEditorState();

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
      const selection = state.getSelection();
      let content = state.getCurrentContent();

      content = Modifier.setBlockType(content, selection, 'code-block2');
      content = Modifier.setBlockData(
        content,
        selection,
        Map({ language: 'golang' })
      );

      const newEditorState = EditorState.push(
        editorState,
        content,
        'change-block-data'
      );

      return newEditorState;
      // return RichUtils.toggleBlockType(state, 'code-block2')
    });
  };

  useEffect(() => {
    setEditorState(convertData(content));
  }, [content]);

  return (
    <>
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
    </>
  );
};

export default RichEditor;
