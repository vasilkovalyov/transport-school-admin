import { useEffect, useState } from 'react';
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

// import { ImageUpload } from '@/src/components';

import { ReviewFormProps, IReviewFormData } from './ReviewForm.type';

const defaultValuesForm: IReviewFormData = {
  name: '',
  text: '',
  rating: null,
};

export default function ReviewForm({ data, onSubmit }: ReviewFormProps) {
  const ratingCount = 5;
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  const { handleSubmit, register, setValue } = useForm<IReviewFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  useEffect(() => {
    if (!data) return;
    setValue('name', data.name);
    setValue('text', data.text);
    setRatingValue(data.rating);
  }, [data]);

  function handleSave(data: IReviewFormData) {
    console.log('data', data);
    onSubmit && onSubmit(data);
  }

  function onChangeRating(number: number) {
    setRatingValue(number);
  }

  // function onUploadImage(image: string) {
  // setValue('image', image);
  // }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={4}>
          {/* <ImageUpload
            viewType="avatar"
            width={100}
            height={100}
            image={data?.image}
            onChange={onUploadImage}
          /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <TextField
              {...register('name')}
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
              rows="8"
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
