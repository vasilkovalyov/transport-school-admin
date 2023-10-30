import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

import { DynamicFieldTogglers, ImageUpload } from '@/src/components';

import {
  ServiceFormProps,
  ServiceFormDataType,
  ServiceInfoItemDataType,
  ServiceEditableFormData,
  FormValuesKey,
} from './ServiceForm.type';

import schemaValidation from './ServiceForm.validation';

const valuesKeys: FormValuesKey[] = [
  'heading',
  'image',
  'price',
  'top_list_info',
  'bottom_list_info',
];

const defaultInfoItem: ServiceInfoItemDataType = {
  text: '',
};

const defaultValuesForm: ServiceEditableFormData = {
  heading: '',
  price: 0,
  top_list_info: [defaultInfoItem],
  bottom_list_info: [defaultInfoItem],
};

export default function ServiceForm({
  data,
  loading,
  onSubmit,
}: ServiceFormProps) {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<ServiceFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  const {
    fields: topFields,
    append: topFieldsAppend,
    remove: topFieldsRemove,
  } = useFieldArray({
    control,
    name: 'top_list_info',
  });

  const {
    fields: bottomFields,
    append: bottomFieldsAppend,
    remove: bottomFieldsRemove,
  } = useFieldArray({
    control,
    name: 'bottom_list_info',
  });

  useEffect(() => {
    if (!data) return;
    fillValues(valuesKeys, data);
  }, [data]);

  function fillValues(keys: FormValuesKey[], values: ServiceEditableFormData) {
    if (!data) return;

    keys.forEach((key) => {
      setValue(key, values[key]);
    });
  }

  function onHandleAddTopListItem() {
    topFieldsAppend(defaultInfoItem);
  }

  function onHandleRemoveTopListItem(numberAchivment: number) {
    topFieldsRemove(numberAchivment);
  }

  function onHandleAddBottomListItem() {
    bottomFieldsAppend(defaultInfoItem);
  }

  function onHandleRemoveBottomListItem(numberAchivment: number) {
    bottomFieldsRemove(numberAchivment);
  }

  function handleSave(data: ServiceFormDataType) {
    onSubmit && onSubmit(data);
  }

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12}>
          <Box maxWidth={200}>
            <ImageUpload
              viewType="wide"
              image={data?.image}
              onChange={onUploadImage}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading service"
            variant="outlined"
            fullWidth
            error={!!errors['heading']?.message}
            helperText={errors['heading']?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('price')}
            id="price"
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
            error={!!errors['price']?.message}
            helperText={errors['price']?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Top list info</Typography>
          {topFields.map((item, index) => (
            <Box key={item.id} mb={4}>
              <Box mb={2}>
                <TextField
                  {...register(`top_list_info.${index}.text`)}
                  id={`top_list_info.${index}`}
                  label="Heading top list item"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box mb={2}>
                <DynamicFieldTogglers
                  fieldLength={topFields.length}
                  fieldIndex={index}
                  fieldAppend={onHandleAddTopListItem}
                  fieldRemove={onHandleRemoveTopListItem}
                />
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Bottom list info</Typography>
          {bottomFields.map((item, index) => (
            <Box key={item.id} mb={4}>
              <Box mb={2}>
                <TextField
                  {...register(`bottom_list_info.${index}.text`)}
                  id={`bottom_list_info.${index}`}
                  label="Heading bottom list item"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box mb={2}>
                <DynamicFieldTogglers
                  fieldLength={bottomFields.length}
                  fieldIndex={index}
                  fieldAppend={onHandleAddBottomListItem}
                  fieldRemove={onHandleRemoveBottomListItem}
                />
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" alignItems="center">
        <Button
          variant="contained"
          size="medium"
          color="success"
          disabled={loading}
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
        {loading ? <CircularProgress size={20} /> : null}
      </Stack>
    </Box>
  );
}
