import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// import { ImageUpload } from '@/src/components';

import { ReviewFormProps, ReviewFormDataType } from './ReviewForm.type';
import schemaValidation from './ReviewForm.validation';
import { ImageUpload } from '@/src/components';

const defaultValuesForm: ReviewFormDataType = {
  name: '',
  text: '',
  rating: null,
};

export default function ReviewForm({
  data,
  loadingSubmit = false,
  onSubmit,
}: ReviewFormProps) {
  const ratingCount = 5;
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('name', data.name);
    setValue('text', data.text);
    setRatingValue(data.rating || null);
  }, [data]);

  function handleSave(data: ReviewFormDataType) {
    onSubmit && onSubmit(data);
  }

  function onChangeRating(number: number) {
    setRatingValue(number);
  }

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={4}>
          <ImageUpload
            viewType="avatar"
            width={100}
            height={100}
            image={data?.image}
            onChange={onUploadImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <TextField
              {...register('name')}
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              error={!!errors['name']?.message}
              helperText={errors['name']?.message}
              InputLabelProps={{
                shrink: true,
              }}
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
              rows="8"
              error={!!errors['text']?.message}
              helperText={errors['text']?.message}
              InputLabelProps={{
                shrink: true,
              }}
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
                        checked={item + 1 === ratingValue}
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
