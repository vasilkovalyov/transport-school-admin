import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { IFormContactsData } from './FormContacts.type';

const defaultValuesForm: IFormContactsData = {
  address: '',
  email: '',
  phone: '',
};

export default function FormContacts() {
  const { handleSubmit, register } = useForm<IFormContactsData>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
  });

  function handleSave(data: IFormContactsData) {
    console.log(data);
  }

  return (
    <Box>
      <Typography variant="h4" marginBottom={2}>
        Contacts
      </Typography>
      <Box component="form" maxWidth={500} marginBottom={4}>
        <Box mb={2}>
          <TextField
            {...register('email')}
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            {...register('address')}
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            {...register('phone')}
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
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
    </Box>
  );
}
