import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

import { ReviewContentFormSectionFormDataType } from './ReviewContentForm.type';
import ReviewContentFormSectionFormService from './ReviewContentForm.service';
import schemaValidation from './ReviewContentForm.validation';

const defaultValuesForm: ReviewContentFormSectionFormDataType = {
  heading: '',
};

const serviceSectionAchivment = new ReviewContentFormSectionFormService();

export default function AchivmentForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ReviewContentFormSectionFormDataType>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  async function loadData() {
    try {
      setLoading(true);
      const response = await serviceSectionAchivment.getInfo();
      const { heading } = response.data;
      setValue('heading', heading);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleSave(data: ReviewContentFormSectionFormDataType) {
    try {
      setLoadingSubmit(true);
      await serviceSectionAchivment.update(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
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
      </Box>
      <Stack spacing={2} direction="row" alignItems="center">
        <Button
          variant="contained"
          size="medium"
          color="success"
          disabled={loadingSubmit}
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
        {loadingSubmit ? <CircularProgress size={20} /> : null}
      </Stack>
    </Box>
  );
}
