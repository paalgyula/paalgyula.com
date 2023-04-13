import { Box, ListItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { EditorState, Modifier } from 'draft-js';
import { Map } from 'immutable';
import Highlight from 'react-highlight';
import '../../../one-dark.min.css';
import { useEditorState } from '../DraftEditorProvider';

type Props = {
  highlight?: boolean;
  'data-offset-key'?: string;
};

const CodeBlock: FC<PropsWithChildren<Props>> = ({
  children,
  highlight = false,
  'data-offset-key': offsetKey,
  ...props
}) => {
  console.log(props);

  const { editorState, setEditorState } = useEditorState();

  if (!editorState) {
    return null;
  }

  // eslint-disable-next-line react/prop-types
  // const offsetKey: string = (props as any)['data-offset-key'];
  const code = offsetKey!.substring(0, 5);
  console.log(code);

  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(code);
  // const { language } = block.getData();

  // eslint-disable-next-line react/prop-types
  //editorState.findLastKey((val, key) => key === (props as any)['data-offset-key'])

  const handleChange = (e: SelectChangeEvent<string>) => {
    // data.set('language', e.target.value);
    const selectionData = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const s1 = Modifier.mergeBlockData(
      contentState,
      selectionData,
      Map({ language: e.target.value })
    );

    setEditorState((state) => EditorState.push(state, s1, 'change-block-data'));
  };

  return (
    <Box
      border={1}
      borderColor="rgba(0,0,0,0.1)"
      borderRadius={2}
      bgcolor="#282c34"
      fontSize={11}
      color="#98c379"
      position="relative"
      p={2}>
      <Box position="absolute" zIndex={100000} right={0} top={0}>
        <Select
          sx={{ bgcolor: '#Fff' }}
          size="small"
          onChange={handleChange}
          defaultValue="javascript">
          <ListItem value="javascript">Javascript</ListItem>
          <ListItem value="go">Go (lang)</ListItem>
          <ListItem value="java">Java</ListItem>
        </Select>
      </Box>
      <code>{highlight ? <Highlight>{children}</Highlight> : children}</code>
    </Box>
  );
};

export default CodeBlock;
