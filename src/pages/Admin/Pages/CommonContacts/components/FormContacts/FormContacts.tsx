import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { IFormContactsData } from './FormContacts.type';
import ContactFormService from './FormContacts.service';

const defaultValuesForm: IFormContactsData = {
  address: '',
  email: '',
  phone: '',
};

const service = new ContactFormService();

export default function FormContacts() {
  const [loading, setLoading] = useState<boolean>(true);
  const { handleSubmit, register, setValue } = useForm<IFormContactsData>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
  });

  function handleSave(data: IFormContactsData) {
    service.update(data);
  }

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getInfo();
      const { address, email, phone } = response.data;
      setValue('address', address);
      setValue('email', email);
      setValue('phone', phone);
    } catch (e) {
      console.log(3);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            {...register('address')}
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            {...register('phone')}
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
