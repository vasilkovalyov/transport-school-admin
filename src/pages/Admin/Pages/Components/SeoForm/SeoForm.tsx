import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { SeoFormProps } from './SeoForm.type';
import schemaValidation from './SeoForm.validation';
import { SeoType } from '@/src/types/seo';

const defaultValuesForm: SeoType = {
  title: '',
  description: '',
  keywords: '',
};

export default function SeoForm({ data, onUpdate }: SeoFormProps) {
  const { handleSubmit, register, setValue } = useForm<SeoType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('title', data?.title);
    setValue('keywords', data?.keywords);
    setValue('description', data?.description);
  }, [data]);

  function handleSave(params: SeoType) {
    onUpdate &&
      onUpdate({
        ...params,
      });
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Box mb={4}>
        <TextField
          {...register('title')}
          id="title"
          label="Title"
          variant="outlined"
          fullWidth
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('description')}
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('keywords')}
          id="keywords"
          label="Keywords"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Button
        variant="contained"
        size="medium"
        color="success"
        onClick={handleSubmit(handleSave)}
      >
        Save
      </Button>
    </Box>
  );
}
