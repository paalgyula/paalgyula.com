
import { Autocomplete, Box, Card, CardActions, Chip, FormControlLabel, Switch, TextField } from '@mui/material';
import {
  RawDraftContentState
} from 'draft-js';
import { useEffect, useState } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getTutorialById, updateTutorial } from '../../firebase/tutorialService';
import { useLoader } from '../../loader';
import FullScreenLoader from '../FullScreenLoader';
import { useDrawer } from '../contexts/DrawerProvider';
import ContentEditor from '../draft/ConentEditor';
import LoaderButton from '../forms/LoaderButton';

import { useFirebase } from '../../firebase/FirebaseProvider';
import { ITutorial } from '../../firebase/tutorial';
import DraftPreview from '../draft/DraftPreview';

const TutorialEditor = () => {
  const { id } = useParams();
  const form = useForm<ITutorial>({});
  const { control, setValue, reset, handleSubmit } = form;
  const { data, isLoading, load } = useLoader<ITutorial>();
  const { setDocumentTitle } = useDrawer();
  const [preview, setPreview] = useState(false);

  const { user } = useFirebase()

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
    data.lastModified = new Date();
    data.author = {
      // TODO: download user avatar first?
      avatarUrl: '',
      displayName: user?.displayName ?? '',
      nick: user?.displayName ?? '',
    }

    console.log(data);

    await updateTutorial(data);
    setDocumentTitle(data.name)
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

                <FormControlLabel control={<Switch value={form.watch('active')} onChange={(e) => setValue('active', e.target.checked)} />} label="Public" />
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
                name="tags"
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={[]}
                    defaultValue={[]}
                    value={form.watch('tags')}
                    onChange={(_, value) => {
                      setValue('tags', value as string[], { shouldDirty: true });
                    }}
                    // {...field}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                      value.map((option: string, index: number) => (
                        // eslint-disable-next-line react/jsx-key
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Tags"
                        placeholder="Tags"
                      />
                    )}
                  />
                )}
              />

              <ContentEditor
                onChange={handleEditorChange}
                content={data!.content}
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

        {preview && (
          <Card elevation={2} sx={{ flex: 1, p: 2 }}>
            <DraftPreview content={form.watch('content')} />
          </Card>
        )}

      </Box>
    </FormProvider>
  );
};

export default TutorialEditor;
