import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { IReviewContentFormSectionFormData } from './ReviewContentForm.type';
import ReviewContentFormSectionFormService from './ReviewContentForm.service';

const defaultValuesForm: IReviewContentFormSectionFormData = {
  heading: '',
};

const serviceSectionAchivment = new ReviewContentFormSectionFormService();

export default function AchivmentForm() {
  const { handleSubmit, register, setValue } =
    useForm<IReviewContentFormSectionFormData>({
      mode: 'onSubmit',
      defaultValues: defaultValuesForm,
    });

  async function loadData() {
    const response = await serviceSectionAchivment.getInfo();
    const { heading } = response.data;

    setValue('heading', heading);
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleSave(data: IReviewContentFormSectionFormData) {
    serviceSectionAchivment.update(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Box mb={4}>
        <Box mb={2}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
