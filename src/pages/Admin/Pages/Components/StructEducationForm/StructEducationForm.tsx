import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {
  StructEducationFormProps,
  IStructEducationFormData,
  IStructEducationData,
} from './StructEducationForm.type';

const defaultStructEducationItem: IStructEducationData = {
  heading: '',
  rich_text: '',
};

const defaultValuesForm: IStructEducationFormData = {
  heading: '',
  struct_education_list: [defaultStructEducationItem],
  publish: false,
};

export default function StructEducationForm({
  data,
  onSubmit,
  onPublish,
}: StructEducationFormProps) {
  const { handleSubmit, register } = useForm<IStructEducationFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IStructEducationFormData) {
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
