import { EditorState } from 'draft-js';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

type DraftEditorProps = {
  setEditorState: Dispatch<SetStateAction<EditorState>>;
  editorState: EditorState;
};

const DraftEditorContext = createContext<DraftEditorProps | null>(null);

const DraftEditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  return (
    <DraftEditorContext.Provider
      value={{
        editorState,
        setEditorState
      }}>
      {children}
    </DraftEditorContext.Provider>
  );
};

export default DraftEditorProvider;

export const useEditorState = (): DraftEditorProps => {
  const ctx = useContext(DraftEditorContext);
  if (!ctx) {
    throw new Error(
      'useEditorState must be wrapped with DraftEdirtorProvider component'
    );
  }

  return ctx;
};
