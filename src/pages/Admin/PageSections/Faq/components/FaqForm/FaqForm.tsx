import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import { FaqFormProps, IFaq, IFaqFormData } from './FaqForm.type';

const defaultFaqListItem: IFaq = {
  heading: '',
  text: '',
};

const defaultValuesForm: IFaqFormData = {
  heading: '',
  list_faq: [defaultFaqListItem],
};

export default function FaqForm({ data, onSubmit }: FaqFormProps) {
  const { handleSubmit, register, control, setValue } = useForm<IFaqFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_faq',
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

  function handleSave(data: IFaqFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
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
      {fields.map((_, index) => (
        <Box key={index} mb={4}>
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
            <Stack spacing={2} direction="row">
              {fields.length - 1 <= index ? (
                <Button
                  variant="contained"
                  size="medium"
                  onClick={onHandleAddAchivmentItem}
                >
                  <AddCircleOutlineOutlinedIcon />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => onHandleRemoveAchivmentItem(index)}
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </Button>
              )}
            </Stack>
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
