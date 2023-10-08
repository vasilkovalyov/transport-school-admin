import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ImageUpload } from '@/src/components';

import {
  HeroFormProps,
  IHeroFormData,
  HeroFormFieldsNecessary,
  HeroFormCheckboxTypes,
} from './HeroForm.type';

import schemaValidation from './HeroForm.validation';

const defaultValuesForm: IHeroFormData = {
  image: '',
  heading: '',
  subheading: '',
  use_link_to_contact_page: false,
  use_phone_cta: false,
  publish: false,
};

export default function HeroForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: HeroFormProps) {
  const [checkboxValues, setCheckboxValues] = useState<HeroFormCheckboxTypes>({
    use_link_to_contact_page: false,
    use_phone_cta: false,
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IHeroFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('subheading', data?.subheading);
    setCheckboxValues({
      use_link_to_contact_page: data.use_link_to_contact_page,
      use_phone_cta: data.use_phone_cta,
    });
  }, [data]);

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  function handleSave(params: HeroFormFieldsNecessary) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
          use_link_to_contact_page: checkboxValues.use_link_to_contact_page,
          use_phone_cta: checkboxValues.use_phone_cta,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
        use_link_to_contact_page: checkboxValues.use_link_to_contact_page,
        use_phone_cta: checkboxValues.use_phone_cta,
      });
  }

  function onChangeCheckbox(
    field: keyof HeroFormCheckboxTypes,
    checked: boolean
  ) {
    setCheckboxValues((prev) => {
      return {
        ...prev,
        [field]: checked,
      };
    });
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
          defaultValue={data?.heading}
          error={!!errors['heading']?.message}
          helperText={errors['heading']?.message}
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
          defaultValue={data?.subheading}
        />
      </Box>
      <Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
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
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          {data ? 'Update' : 'Create'}
        </Button>
        {data ? (
          <Button
            variant="contained"
            size="medium"
            color={data?.publish ? 'info' : 'warning'}
            onClick={() => onPublish && onPublish(!data?.publish)}
          >
            {data?.publish ? 'Unpublish' : 'Publish'}
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
}
