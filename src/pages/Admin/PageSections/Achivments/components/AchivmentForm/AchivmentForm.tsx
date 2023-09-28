import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { DynamicFieldTogglers } from '@/src/components';

import {
  IAchivmentFormData,
  AchivmentFormProps,
  IAchivmentListItemData,
} from './AchivmentForm.type';

const defaultAchivmentListItem: IAchivmentListItemData = {
  heading: '',
  text: '',
};

const defaultValuesForm: IAchivmentFormData = {
  heading: '',
  subheading: '',
  list_achivments: [defaultAchivmentListItem],
};

export default function AchivmentForm({ data, onSubmit }: AchivmentFormProps) {
  const { handleSubmit, register, control, setValue } =
    useForm<IAchivmentFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
    });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_achivments',
    keyName: 'id',
  });

  useEffect(() => {
    if (!data) return;
    if (!data.list_achivments.length) {
      setValue('list_achivments', [defaultAchivmentListItem]);
    } else {
      setValue('list_achivments', data.list_achivments);
    }
    setValue('heading', data.heading);
    setValue('subheading', data.subheading);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.heading, data?.subheading, data?.list_achivments]);

  function onHandleAddAchivmentItem() {
    append(defaultAchivmentListItem);
  }

  function onHandleRemoveAchivmentItem(numberAchivment: number) {
    remove(numberAchivment);
  }

  function handleSave(data: IAchivmentFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
      <Box mb={4}>
        <Box mb={2}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            {...register('subheading')}
            id="subheading"
            label="Subheading"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>
      <Typography variant="h4">Achivment list</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} mb={4}>
          <Box mb={2}>
            <TextField
              {...register(`list_achivments.${index}.heading`)}
              id={`list_achivments.${index}.heading`}
              label="Heading achivment"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register(`list_achivments.${index}.text`)}
              id={`list_achivments.${index}.text`}
              label="Text achivment"
              variant="outlined"
              multiline
              fullWidth
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <DynamicFieldTogglers
              fieldLength={fields.length}
              fieldIndex={index}
              fieldAppend={onHandleAddAchivmentItem}
              fieldRemove={onHandleRemoveAchivmentItem}
            />
          </Box>
        </Box>
      ))}
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
