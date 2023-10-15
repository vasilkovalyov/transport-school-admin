import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { DynamicFieldTogglers } from '@/src/components';

import {
  IAchivmentSectionFormData,
  IAchivmentSectionListItemData,
} from './AchivmentForm.type';
import AchivmentSectionFormService from './AchivmentForm.service';

const defaultAchivmentListItem: IAchivmentSectionListItemData = {
  heading: '',
  text: '',
};

const defaultValuesForm: IAchivmentSectionFormData = {
  heading: '',
  subheading: '',
  list_achivments: [defaultAchivmentListItem],
};

const serviceSectionAchivment = new AchivmentSectionFormService();

export default function AchivmentForm() {
  const { handleSubmit, register, control, setValue } =
    useForm<IAchivmentSectionFormData>({
      mode: 'onSubmit',
      defaultValues: defaultValuesForm,
    });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_achivments',
    keyName: 'id',
  });

  async function loadData() {
    const response = await serviceSectionAchivment.getInfo();
    const { heading, subheading, list_achivments } = response.data;
    if (!list_achivments.length) {
      setValue('list_achivments', [defaultAchivmentListItem]);
    } else {
      setValue('list_achivments', list_achivments);
    }
    setValue('heading', heading);
    setValue('subheading', subheading);
  }

  useEffect(() => {
    loadData();
  }, []);

  function onHandleAddAchivmentItem() {
    append(defaultAchivmentListItem);
  }

  function onHandleRemoveAchivmentItem(numberAchivment: number) {
    remove(numberAchivment);
  }

  function handleSave(data: IAchivmentSectionFormData) {
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
        <Box mb={2}>
          <TextField
            {...register('subheading')}
            id="subheading"
            label="Subheading"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
