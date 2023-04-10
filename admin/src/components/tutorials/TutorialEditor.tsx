import { ITutorial } from '@frontend/data/tutorial';
import { Box, Card, CardActions, FormControlLabel, Switch, TextField } from '@mui/material';
import {
  convertFromRaw, DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  RawDraftContentState
} from 'draft-js';
import { useEffect, useState } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getTutorialById } from '../../firebase/tutorialService';
import { useLoader } from '../../loader';
import { useDrawer } from '../contexts/DrawerProvider';
import LoaderButton from '../forms/LoaderButton';
import FullScreenLoader from '../FullScreenLoader';
import ContentEditor from './ConentEditor';

import { Map } from 'immutable';
import { updateTutorial } from '../../firebase/tutorialService';
import CodeBlock from '../draft/CodeBlock';

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

const Preview = () => {
  const form = useFormContext();
  const { watch } = form;

  const content = watch('content');
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
    <Card elevation={2} sx={{ flex: 1, p: 2 }}>
      <Editor
        blockRenderMap={extendedBlockRenderMap}
        editorState={editorState}
        onChange={() => { }}
        readOnly
      />
    </Card>
  );
};

const TutorialEditor = () => {
  const { id } = useParams();
  const form = useForm<ITutorial>({});
  const { control, setValue, reset, handleSubmit } = form;
  const { data, isLoading, load } = useLoader<ITutorial>();
  const { setDocumentTitle } = useDrawer();
  const [preview, setPreview] = useState(false);

  const handleEditorChange = (value: RawDraftContentState) => {
    setValue('content', value, {
      shouldDirty: true
    });
  };

  useEffect(() => {
    load(getTutorialById(id!)).then((data) => {
      reset(data);
      setDocumentTitle(data.name);
    });
  }, [id]);

  const onSubmit: SubmitHandler<ITutorial> = async (data: ITutorial) => {
    return await updateTutorial(data);
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <FormProvider {...form}>
      <Box display="flex" flexDirection="row" columnGap={2}>
        <form style={{ flex: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <Box p={2} display="flex" flexDirection="column" rowGap={2}>
              <Box display="flex" flex={1} flexDirection="row" columnGap={2} >
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => <TextField label="Title" sx={{ flex: 1 }} {...field} />}
                />

                <FormControlLabel control={<Switch value={} onChange={(e) => setValue('active')} />} label="Public" />
                <FormControlLabel control={<Switch />} value={preview} onChange={() => setPreview(s => !s)} label="Show preview" />

              </Box>
              <Controller
                control={control}
                name="subtitle"
                render={({ field }) => (
                  <TextField label="Subtitle (optional)" {...field} />
                )}
              />
              <Controller
                control={control}
                name="subtitle"
                render={({ field }) => (
                  <TextField multiline label="Subtitle (optional)" {...field} />
                )}
              />

              <ContentEditor
                onChange={handleEditorChange}
                content={data.content}
              />
            </Box>

            <CardActions>
              <Box flex={1} />
              <LoaderButton
                loading={form.formState.isSubmitting}
                disabled={!form.formState.isDirty}
                variant="contained"
                type="submit">
                Save
              </LoaderButton>
            </CardActions>
          </Card>
        </form>

        {preview && (<Preview />)}
        
      </Box>
    </FormProvider>
  );
};

export default TutorialEditor;
