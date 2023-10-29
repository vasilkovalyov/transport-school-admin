import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import {
  ContactsSectionFormDataType,
  FormValuesKey,
} from './ContactsForm.type';
import ContactsSectionFormService from './ContactsForm.service';
import schemaValidation from './ContactForm.validation';

const defaultValuesForm: ContactsSectionFormDataType = {
  heading: '',
  address: '',
  phone: '',
  email: '',
  map_url: '',
};

const valuesKeys: FormValuesKey[] = [
  'heading',
  'address',
  'phone',
  'email',
  'map_url',
];

const serviceSectionContacts = new ContactsSectionFormService();

export default function ContactsForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ContactsSectionFormDataType>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  async function loadData() {
    try {
      setLoading(true);
      const response = await serviceSectionContacts.getInfo();
      fillValues(valuesKeys, response.data);
      if (response.data.map_url) {
        setMapUrl(response.data.map_url);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function fillValues(
    keys: FormValuesKey[],
    values: ContactsSectionFormDataType
  ) {
    if (!values) return;
    keys.forEach((key) => {
      setValue(key, values[key]);
    });
  }

  async function handleSave(data: ContactsSectionFormDataType) {
    try {
      setLoadingUpdate(true);
      await serviceSectionContacts.update(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingUpdate(false);
    }
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      {loading ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
            error={!!errors['heading']?.message}
            helperText={errors['heading']?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('address')}
            id="address"
            label="Address"
            variant="outlined"
            error={!!errors['address']?.message}
            helperText={errors['address']?.message}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('phone')}
            id="phone"
            label="Phone"
            variant="outlined"
            error={!!errors['phone']?.message}
            helperText={errors['phone']?.message}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('email')}
            id="email"
            label="Email"
            variant="outlined"
            error={!!errors['email']?.message}
            helperText={errors['email']?.message}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} mb={4}>
          <TextField
            {...register('map_url')}
            id="map_url"
            label="Map link url"
            variant="outlined"
            fullWidth
            multiline
            rows={9}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setMapUrl(e.currentTarget.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} mb={4}>
          {mapUrl ? (
            <iframe
              src={mapUrl}
              width="100%"
              height="212"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : null}
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" alignItems="center">
        <Button
          variant="contained"
          size="medium"
          color="success"
          disabled={loadingUpdate}
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
        {loadingUpdate ? <CircularProgress size={20} /> : null}
      </Stack>
    </Box>
  );
}
