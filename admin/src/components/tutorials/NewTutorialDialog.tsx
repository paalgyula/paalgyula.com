import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Typography
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ITutorial } from '@frontend/data/tutorial';
import LoaderButton from '../forms/LoaderButton';
import { createTutorial } from '../../firebase/tutorialService';

const defaultValues: ITutorial = {
  name: '',
  subtitle: '',
  category: '',
  tags: [],
  active: false,
  author: {
    avatarUrl: '',
    displayName: '',
    nick: ''
  },
  createdAt: new Date().toUTCString(),
  link: ''
};

type Props = {
  open: boolean;
  onClose: (refresh?: boolean) => void;
};

const NewTutorialDialog: FC<Props> = ({ open, onClose }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  // Reset form if the dialog has been closed
  useEffect(() => {
    if (!open) {
      reset();
      setSubmitting(false);
    }
  }, [open]);

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: ITutorial) => {
    setSubmitting(true);
    try {
      await createTutorial(data);
      onClose(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const NewTutorialForm = () => (
    <Box display="flex" minWidth={300} flexDirection="column" rowGap={2} pt={1}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField required label="Tutorial title" {...field} />}
      />
      <Controller
        name="subtitle"
        control={control}
        render={({ field }) => <TextField label="Subtile (optional)" {...field} />}
      />
      <Controller
        name="link"
        control={control}
        render={({ field }) => <TextField label="Link" {...field} />}
      />
    </Box>
  );

  return (
    <Dialog open={open} maxWidth="lg">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box p={2}>
          <Typography variant="h5">Create new tutorial 🤗</Typography>
        </Box>
        <DialogContent>
          <NewTutorialForm />
        </DialogContent>
        <DialogActions>
          <Box flex={1} />
          <Button type="button" onClick={() => onClose()}>
            Close
          </Button>
          <LoaderButton loading={submitting} variant="contained" type="submit">
            Save
          </LoaderButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewTutorialDialog;