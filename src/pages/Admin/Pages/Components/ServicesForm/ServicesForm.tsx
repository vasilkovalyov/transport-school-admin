import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ServicesFormProps, IServicesFormData } from './ServicesForm.type';

const defaultValuesForm: IServicesFormData = {
  heading: '',
  subheading: '',
};

export default function ServicesForm({ data, onSubmit }: ServicesFormProps) {
  const { handleSubmit, register } = useForm<IServicesFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IServicesFormData) {
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
          {...register('subheading')}
          id="subheading"
          label="subheading"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
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
