import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';

import { DynamicFieldTogglers } from '@/src/components';

import {
  TeamEducationFormProps,
  ITeamEducationFormData,
  TeamEducationDataType,
  TeamEducationFormCheckboxTypes,
} from './TeamEducationForm.type';
import schemaValidation from './TeamEducationForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultEducationItem: TeamEducationDataType = {
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
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: TeamEducationFormProps) {
  const [checkboxValues, setCheckboxValues] =
    useState<TeamEducationFormCheckboxTypes>({
      use_cta_link: false,
    });

  const { handleSubmit, register, setValue, control } =
    useForm<ITeamEducationFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
      resolver: yupResolver(schemaValidation),
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education_list',
    keyName: 'id',
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('subheading', data?.subheading);

    setCheckboxValues({
      use_cta_link: data.use_cta_link,
    });

    if (data.education_list) {
      setValue(`education_list`, data.education_list);
    }
  }, [data]);

  function onHandleAddItem() {
    append(defaultEducationItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  function handleSave(params: ITeamEducationFormData) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
          use_cta_link: checkboxValues.use_cta_link,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
        use_cta_link: checkboxValues.use_cta_link,
      });
  }

  function onChangeCheckbox(
    field: keyof TeamEducationFormCheckboxTypes,
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
          InputLabelProps={{
            shrink: true,
          }}
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
          InputLabelProps={{
            shrink: true,
          }}
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
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register(`education_list.${index}.heading`)}
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
              {...register(`education_list.${index}.discount`)}
              id={`fields.${index}.discount`}
              label="Discount"
              variant="outlined"
              fullWidth
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
        </Box>
      ))}
      <Box mb={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxValues.use_cta_link}
              color="success"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCheckbox('use_cta_link', e.target.checked)
              }
            />
          }
          label="Use cta link"
        />
      </Box>
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
