import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ContactsFormProps, IContactsFormData } from './ContactsForm.type';

const defaultValuesForm: IContactsFormData = {
  publish: false,
};

export default function ContactsForm({ data, onSubmit }: ContactsFormProps) {
  const { handleSubmit, register } = useForm<IContactsFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IContactsFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
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
