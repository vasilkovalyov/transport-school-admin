import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ReviewFormProps, IReviewFormData } from './ReviewForm.type';

const defaultValuesForm: IReviewFormData = {
  heading: '',
  publish: false,
};

export default function ReviewForm({
  data,
  onSubmit,
  onPublish,
}: ReviewFormProps) {
  const { handleSubmit, register } = useForm<IReviewFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IReviewFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Box mb={4}>
        <TextField
          {...register('heading')}
          id="heading"
          label="Heading"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="medium"
          color={data?.publish ? 'info' : 'warning'}
          onClick={() => onPublish && onPublish(!data?.publish)}
        >
          {data?.publish ? 'Unpublish' : 'Publish'}
        </Button>
      </Stack>
    </Box>
  );
}
