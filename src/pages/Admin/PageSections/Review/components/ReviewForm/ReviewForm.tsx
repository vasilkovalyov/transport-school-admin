import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { IReviewFormData, ReviewFormProps } from './ReviewForm.type';

const defaultValuesForm: IReviewFormData = {
  heading: '',
  text: '',
};

export default function ReviewForm({ data, onSubmit }: ReviewFormProps) {
  const ratingCount = 5;
  const { handleSubmit, register, setValue, getValues } =
    useForm<IReviewFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
    });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data.heading);
    setValue('text', data.text);
    setValue('rating', data.rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleSave(data: IReviewFormData) {
    console.log('data', data);
    onSubmit && onSubmit(data);
  }

  function onChangeRating(number: number) {
    setValue('rating', number);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <TextField
              {...register('heading')}
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={4}>
            <TextField
              {...register('text')}
              id="text"
              label="Text"
              variant="outlined"
              fullWidth
              multiline
              rows="6"
            />
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="rating">Rating</FormLabel>
              <RadioGroup row aria-labelledby="rating" name="rating">
                {Array.from(Array(ratingCount).keys()).map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item + 1}
                    control={
                      <Radio
                        {...register('rating')}
                        checked={item === getValues('rating')}
                        onChange={(e) => onChangeRating(+e.currentTarget.value)}
                      />
                    }
                    label={item + 1}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
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
