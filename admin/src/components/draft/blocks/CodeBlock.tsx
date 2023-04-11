import { Box, ListItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

import Highlight from 'react-highlight';
import '../../../one-dark.min.css';
import { useEditorState } from '../DraftEditorProvider';
import { HandymanOutlined } from '@mui/icons-material';
import { ContentState, EditorState, Modifier } from 'draft-js';
import { Map } from 'immutable';

type Props = {
  highlight?: boolean;
};

const CodeBlock: FC<PropsWithChildren<Props>> = ({
  children,
  highlight = false,
  ...props
}) => {
  console.log(props);

  const { editorState, setEditorState } = useEditorState()

  if (!editorState) {
    return null;
  }

  // eslint-disable-next-line react/prop-types
  const offsetKey: string = (props as any)['data-offset-key'];
  const code = offsetKey.substring(0, 5);
  console.log(code)

  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(code);
  const data = block.getData()
  // console.log("contentBlock", blockWithLinkAtBeginning)
  // const linkKey = blockWithLinkAtBeginning.getEntityAt(0);
  // const linkInstance = contentState.getEntity(linkKey);
  // const { url } = linkInstance.getData();

  // eslint-disable-next-line react/prop-types
  //editorState.findLastKey((val, key) => key === (props as any)['data-offset-key'])

  const handleChange = (e: SelectChangeEvent<string>) => {
    // data.set('language', e.target.value);
    const selectionData = editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const s1 = Modifier.mergeBlockData(contentState, selectionData, Map({ language: e.target.value }))

    setEditorState(state => EditorState.push(state, s1, "change-block-data"));
  }

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
      <Box position="absolute" right={0} top={0}>
        <Select sx={{ bgcolor: '#Fff' }} size='small' onChange={handleChange} defaultValue="javascript">
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
