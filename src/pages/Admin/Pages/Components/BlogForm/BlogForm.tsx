import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { BlogFormProps, IBlogFormData } from './BlogForm.type';

const defaultValuesForm: IBlogFormData = {
  heading: '',
  post_number: null,
  publish: false,
};

export default function BlogForm({ data, onSubmit }: BlogFormProps) {
  const { handleSubmit, register } = useForm<IBlogFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IBlogFormData) {
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
      <Box mb={4}>
        <TextField
          {...register('post_number')}
          id="post_number"
          label="Post number"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box mb={4}>
        <FormControlLabel
          control={
            <Checkbox
              {...register('publish')}
              defaultChecked={data ? data.publish : false}
              color="success"
            />
          }
          label="Publish section"
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
