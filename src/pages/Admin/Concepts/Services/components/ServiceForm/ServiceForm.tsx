import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { DynamicFieldTogglers } from '@/src/components';

import {
  ServiceFormProps,
  IServiceFormData,
  IServiceInfoItemData,
  ServiceEditableFormData,
  FormValuesKey,
} from './ServiceForm.type';

const valuesKeys: FormValuesKey[] = [
  'heading',
  'price',
  'top_list_info',
  'bottom_list_info',
];

const defaultInfoItem: IServiceInfoItemData = {
  text: '',
};

const defaultValuesForm: ServiceEditableFormData = {
  heading: '',
  price: null,
  top_list_info: [defaultInfoItem],
  bottom_list_info: [defaultInfoItem],
};

export default function ServiceForm({ data, onSubmit }: ServiceFormProps) {
  const { handleSubmit, register, control, setValue } =
    useForm<IServiceFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
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

  function handleSave(data: IServiceFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading service"
            variant="outlined"
            fullWidth
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
