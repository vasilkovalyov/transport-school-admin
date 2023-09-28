import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ImageUpload } from '@/src/components';

import { HeroFormProps, IHeroFormData } from './HeroForm.type';

const defaultValuesForm: IHeroFormData = {
  image: '',
  heading: '',
  subheading: '',
  use_link_to_contact_page: false,
  use_phone_cta: false,
};

export default function HeroForm({ data, onSubmit }: HeroFormProps) {
  const { handleSubmit, register, setValue } = useForm<IHeroFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  function handleSave(data: IHeroFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Box mb={4}>
        <ImageUpload
          viewType="wide"
          image={data?.image}
          onChange={onUploadImage}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('heading')}
          id="heading"
          label="Heading"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('subheading')}
          id="subheading"
          label="subheading"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </Box>
      <Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('use_link_to_contact_page')}
                defaultChecked={data ? data.use_link_to_contact_page : false}
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
                defaultChecked={data ? data.use_phone_cta : false}
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
