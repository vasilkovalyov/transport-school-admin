import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { BlogFormProps, IBlogFormData } from './BlogForm.type';
import schemaValidation from './BlogForm.validation';

const defaultValuesForm: IBlogFormData = {
  heading: '',
  post_number: null,
  publish: false,
};

export default function BlogForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: BlogFormProps) {
  const { handleSubmit, register, setValue } = useForm<IBlogFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('post_number', data?.post_number);
  }, [data]);

  function handleSave(params: IBlogFormData) {
    console.log(params);
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
      });
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
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          {data ? 'Update' : 'Create'}
        </Button>
        {data ? (
          <Button
            variant="contained"
            size="medium"
            color={data?.publish ? 'info' : 'warning'}
            onClick={() => onPublish && onPublish(!data?.publish)}
          >
            {data?.publish ? 'Unpublish' : 'Publish'}
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
}
