import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import {
  CtaSectionFormDataType,
  CtaSectionCheckboxTypes,
} from './CtaForm.type';
import CtaSectionFormService from './CtaForm.service';

import schemaValidation from './CtaForm.validation';

const defaultValuesForm: CtaSectionFormDataType = {
  heading: '',
  use_link_to_contact_page: false,
  use_phone_cta: false,
};

const serviceSectionCta = new CtaSectionFormService();

export default function CtaForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const [checkboxValues, setCheckboxValues] = useState<CtaSectionCheckboxTypes>(
    {
      use_link_to_contact_page: false,
      use_phone_cta: false,
    }
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CtaSectionFormDataType>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  async function loadData() {
    try {
      setLoading(true);
      const response = await serviceSectionCta.getInfo();
      setValue('heading', response.data?.heading);
      setCheckboxValues({
        use_link_to_contact_page: response.data.use_link_to_contact_page,
        use_phone_cta: response.data.use_phone_cta,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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

  async function handleSave(data: CtaSectionFormDataType) {
    try {
      setLoadingUpdate(true);
      await serviceSectionCta.update(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingUpdate(false);
    }
  }

  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
      {loading ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Box mb={4}>
        <Box mb={2}>
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
