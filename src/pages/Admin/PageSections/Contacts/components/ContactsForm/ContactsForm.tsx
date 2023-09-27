import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import {
  ContactsFormProps,
  IContactsFormData,
  FormValuesKey,
} from './ContactsForm.type';

const defaultValuesForm: IContactsFormData = {
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

export default function ContactsForm({ data }: ContactsFormProps) {
  const [mapUrl, setMapUrl] = useState<string | null>(null);
  const { handleSubmit, register, setValue } = useForm<IContactsFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  useEffect(() => {
    if (!data) return;
    fillValues(valuesKeys);
    setMapUrl(data.map_url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function fillValues(values: FormValuesKey[]) {
    if (!data) return;
    values.map((item) => setValue(item, data[item]));
  }

  function handleSave(data: IContactsFormData) {
    console.log(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('address')}
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('phone')}
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('email')}
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
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
