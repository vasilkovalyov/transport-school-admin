import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { CtaFormProps, ICtaFormData } from './CtaForm.type';

const defaultValuesForm: ICtaFormData = {
  heading: '',
  use_link_to_contact_page: false,
  use_phone_cta: false,
};

export default function CtaForm({ data, onSubmit }: CtaFormProps) {
  const { handleSubmit, register, setValue } = useForm<ICtaFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data.heading);
    setValue('use_link_to_contact_page', data.use_link_to_contact_page);
    setValue('use_phone_cta', data.use_phone_cta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleSave(data: ICtaFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
      <Box mb={4}>
        <Box mb={2}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('use_link_to_contact_page')}
                defaultChecked={data ? data.use_link_to_contact_page : false}
              />
            }
            label="Use link to contact page"
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('use_phone_cta')}
                defaultChecked={data ? data.use_phone_cta : false}
              />
            }
            label="Use phone cta"
          />
        </Box>
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
