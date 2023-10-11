import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ICtaSectionFormData, CtaSectionCheckboxTypes } from './CtaForm.type';
import CtaSectionFormService from './CtaForm.service';

const defaultValuesForm: ICtaSectionFormData = {
  heading: '',
  use_link_to_contact_page: false,
  use_phone_cta: false,
};

const serviceSectionCta = new CtaSectionFormService();

export default function CtaForm() {
  const [checkboxValues, setCheckboxValues] = useState<CtaSectionCheckboxTypes>(
    {
      use_link_to_contact_page: false,
      use_phone_cta: false,
    }
  );

  const { handleSubmit, register, setValue } = useForm<ICtaSectionFormData>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
  });

  async function loadData() {
    const response = await serviceSectionCta.getInfo();
    setValue('heading', response.data?.heading);
    setCheckboxValues({
      use_link_to_contact_page: response.data.use_link_to_contact_page,
      use_phone_cta: response.data.use_phone_cta,
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  function onChangeCheckbox(
    field: keyof CtaSectionCheckboxTypes,
    checked: boolean
  ) {
    setCheckboxValues((prev) => {
      return {
        ...prev,
        [field]: checked,
      };
    });
  }

  function handleSave(data: ICtaSectionFormData) {
    serviceSectionCta.update(data);
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
                checked={checkboxValues.use_link_to_contact_page}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeCheckbox('use_link_to_contact_page', e.target.checked)
                }
                color="success"
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
                checked={checkboxValues.use_phone_cta}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeCheckbox('use_phone_cta', e.target.checked)
                }
                color="success"
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
