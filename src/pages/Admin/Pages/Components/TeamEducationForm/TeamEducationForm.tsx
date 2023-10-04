import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { DynamicFieldTogglers } from '@/src/components';

import {
  TeamEducationFormProps,
  ITeamEducationFormData,
  ITeamEducationData,
} from './TeamEducationForm.type';

const defaultEducationItem: ITeamEducationData = {
  type: '',
  discount: '',
  heading: '',
};

const defaultValuesForm: ITeamEducationFormData = {
  heading: '',
  subheading: '',
  use_cta_link: false,
  education_list: [defaultEducationItem],
  publish: false,
};

export default function TeamEducationForm({
  data,
  onSubmit,
  onPublish,
}: TeamEducationFormProps) {
  const { handleSubmit, register, control } = useForm<ITeamEducationFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education_list',
    keyName: 'id',
  });

  function onHandleAddItem() {
    append(defaultEducationItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  function handleSave(data: ITeamEducationFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
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
      <Typography variant="h4">Education list</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} mb={4}>
          <Box mb={2}>
            <TextField
              {...register(`education_list.${index}.type`)}
              id={`fields.${index}.type`}
              label="Type"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register(`education_list.${index}.heading`)}
              id={`fields.${index}.heading`}
              label="Heading"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register(`education_list.${index}.discount`)}
              id={`fields.${index}.discount`}
              label="Discount"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <DynamicFieldTogglers
              fieldLength={fields.length}
              fieldIndex={index}
              fieldAppend={onHandleAddItem}
              fieldRemove={onHandleRemoveItem}
            />
          </Box>
        </Box>
      ))}
      <Box mb={4}>
        <FormControlLabel
          control={
            <Checkbox
              {...register('use_cta_link')}
              defaultChecked={data ? data.use_cta_link : false}
              color="success"
            />
          }
          label="Use cta link"
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="medium"
          color={data?.publish ? 'info' : 'warning'}
          onClick={() => onPublish && onPublish(!data?.publish)}
        >
          {data?.publish ? 'Unpublish' : 'Publish'}
        </Button>
      </Stack>
    </Box>
  );
}
