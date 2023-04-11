import {
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  RawDraftContentState,
  convertFromRaw
} from 'draft-js';
import { FC, useEffect, useState } from 'react';

import { Map } from 'immutable';
import CodeBlock from './blocks/CodeBlock';
import DraftEditorProvider from './DraftEditorProvider';

const blockRenderMap = Map({
  'code-block2': {
    // element is used during paste or html conversion to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: 'code-block2',
    wrapper: <CodeBlock highlight />
  }
});

// keep support for other draft default block types and add our myCustomBlock type
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

type Props = {
  content: RawDraftContentState;
};

const DraftPreview: FC<Props> = ({ content }) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    try {
      const ec = convertFromRaw(content);
      setEditorState(EditorState.createWithContent(ec));
    } catch (err) {
      console.error(`error creating state: err`);
    }
  }, [content]);

  return (
    <DraftEditorProvider>
      <Editor
        blockRenderMap={extendedBlockRenderMap}
        editorState={editorState}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => { }}
        readOnly
      />
    </DraftEditorProvider>
  );
};

export default DraftPreview;
