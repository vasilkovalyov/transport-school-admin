import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DynamicFieldTogglers, ImageUpload } from '@/src/components';

import {
  RequirementFormProps,
  IRequirementFormData,
  IRequirementItem,
} from './RequirementForm.type';

const defaultRequirementItem: IRequirementItem = {
  heading: '',
  text: '',
  image: '',
};

const defaultValuesForm: IRequirementFormData = {
  heading: '',
  requirement_list: [defaultRequirementItem],
  publish: false,
};

export default function RequirementForm({
  data,
  onSubmit,
  onPublish,
}: RequirementFormProps) {
  const { handleSubmit, register, setValue, control } =
    useForm<IRequirementFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'requirement_list',
    keyName: 'id',
  });

  function onHandleAddItem() {
    append(defaultRequirementItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  function handleSave(data: IRequirementFormData) {
    onSubmit && onSubmit(data);
  }

  function onUploadImage(image: string, index: number) {
    setValue(`requirement_list.${index}.image`, image);
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
      <Typography variant="h4">Requirement list</Typography>
      {fields.map((item, index) => (
        <Grid container key={item.id} mb={4} columnSpacing={4}>
          <Grid item xs={12} lg={4}>
            <Box mb={2}>
              <ImageUpload
                viewType="square"
                image={data?.requirement_list[index].image}
                onChange={(image) => onUploadImage(image, index)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box mb={2}>
              <TextField
                {...register(`requirement_list.${index}.heading`)}
                id={`fields.${index}.heading`}
                label="Heading"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                {...register(`requirement_list.${index}.text`)}
                id={`fields.${index}.text`}
                label="Text"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
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
          </Grid>
        </Grid>
      ))}
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
