import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { DynamicFieldTogglers, ImageUpload } from '@/src/components';

import {
  RequirementFormProps,
  RequirementFormDataType,
  RequirementItemType,
} from './RequirementForm.type';
import schemaValidation from './RequirementForm.validation';
import { useEffect } from 'react';
import { BlockTogglers } from '../BlockTogglers';

const defaultRequirementItem: RequirementItemType = {
  heading: '',
  text: '',
  image: '',
};

const defaultValuesForm: RequirementFormDataType = {
  heading: '',
  requirements_list: [defaultRequirementItem],
  publish: false,
};

export default function RequirementForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: RequirementFormProps) {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<RequirementFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'requirements_list',
    keyName: 'id',
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);

    if (data.requirements_list?.length) {
      console.log(data.requirements_list);
      setValue(`requirements_list`, data.requirements_list);
    }
  }, [data]);

  function onHandleAddItem() {
    append(defaultRequirementItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  function handleSave({ publish, ...params }: RequirementFormDataType) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
      });
  }

  function onUploadImage(image: string, index: number) {
    setValue(`requirements_list.${index}.image`, image);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      {loadingType === 'loading' ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Box mb={4}>
        <TextField
          {...register('heading')}
          id="heading"
          label="Heading"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          error={!!errors['heading']?.message}
          helperText={errors['heading']?.message}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Typography variant="h4">Requirement list</Typography>
      {fields.map((item, index) => (
        <Grid container key={item.id} mb={4} columnSpacing={4}>
          <Grid item xs={12} lg={4}>
            <Box mb={2} maxWidth={60}>
              <ImageUpload
                viewType="square"
                image={
                  data?.requirements_list
                    ? data?.requirements_list[index]?.image
                    : '/'
                }
                onChange={(image) => onUploadImage(image, index)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box mb={2}>
              <TextField
                {...register(`requirements_list.${index}.heading`)}
                id={`fields.${index}.heading`}
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
                {...register(`requirements_list.${index}.text`)}
                id={`fields.${index}.text`}
                label="Text"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true,
                }}
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
      <BlockTogglers
        typeToggle={!data ? 'create' : 'update'}
        publish={data?.publish}
        loadingType={loadingType}
        showPublishButton={data !== null}
        onSubmit={handleSubmit(handleSave)}
        onPublish={onPublish}
      />
    </Box>
  );
}
