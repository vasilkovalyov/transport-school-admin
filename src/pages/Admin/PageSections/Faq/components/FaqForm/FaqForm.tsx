import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { DynamicFieldTogglers, ImageUpload } from '@/src/components';

import { FaqFormProps, IFaq, IFaqFormData } from './FaqForm.type';

const defaultFaqListItem: IFaq = {
  heading: '',
  text: '',
};

const defaultValuesForm: IFaqFormData = {
  image: '',
  heading: '',
  list_faq: [defaultFaqListItem],
};

export default function FaqForm({ data, onCreate, onUpdate }: FaqFormProps) {
  const { handleSubmit, register, control, setValue } = useForm<IFaqFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_faq',
    keyName: 'id',
  });

  useEffect(() => {
    if (!data) return;
    if (!data.list_faq.length) {
      setValue('list_faq', [defaultFaqListItem]);
    } else {
      setValue('list_faq', data.list_faq);
    }
    setValue('heading', data.heading);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.heading, data?.list_faq]);

  function onHandleAddAchivmentItem() {
    append(defaultFaqListItem);
  }

  function onHandleRemoveAchivmentItem(numberAchivment: number) {
    remove(numberAchivment);
  }

  function handleSave(params: IFaqFormData) {
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

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  return (
    <Box component="form" marginBottom={4}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} lg={7} xl={5}>
          <Box mb={4}>
            <TextField
              {...register('heading')}
              id="heading"
              label="Heading"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Typography variant="h4">Faq list</Typography>
          {fields.map((item, index) => (
            <Box key={item.id} mb={4}>
              <Box mb={2}>
                <TextField
                  {...register(`list_faq.${index}.heading`)}
                  id={`list_faq.${index}.heading`}
                  label="Heading achivment"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  {...register(`list_faq.${index}.text`)}
                  id={`list_faq.${index}.text`}
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
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              size="medium"
              color="success"
              onClick={handleSubmit(handleSave)}
            >
              {data ? 'Update' : 'Create'}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={5}>
          <ImageUpload
            viewType="square"
            image={data?.image}
            onChange={onUploadImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
