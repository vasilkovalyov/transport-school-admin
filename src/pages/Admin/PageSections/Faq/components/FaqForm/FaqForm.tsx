import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import { DynamicFieldTogglers } from '@/src/components';

import { IFaq, IFaqSectionFormData } from './FaqForm.type';
import FaqSectionFormService from './FaqForm.service';

const defaultFaqListItem: IFaq = {
  heading: '',
  text: '',
};

const defaultValuesForm: IFaqSectionFormData = {
  image: '',
  heading: '',
  list_faq: [defaultFaqListItem],
};

const serviceSectionFaq = new FaqSectionFormService();

export default function FaqForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const { handleSubmit, register, control, setValue } =
    useForm<IFaqSectionFormData>({
      mode: 'onSubmit',
      defaultValues: defaultValuesForm,
    });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_faq',
    keyName: 'id',
  });

  async function loadData() {
    try {
      setLoading(true);
      const response = await serviceSectionFaq.getInfo();
      const { heading, list_faq } = response.data;
      setValue('heading', heading);
      setValue('list_faq', list_faq);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function onHandleAddAchivmentItem() {
    append(defaultFaqListItem);
  }

  function onHandleRemoveAchivmentItem(numberAchivment: number) {
    remove(numberAchivment);
  }

  async function handleSave(data: IFaqSectionFormData) {
    try {
      setLoadingUpdate(true);
      await serviceSectionFaq.update(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingUpdate(false);
    }
  }

  return (
    <Box component="form" marginBottom={4}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12}>
          {loading ? (
            <Box mb={4}>
              <LinearProgress />
            </Box>
          ) : null}
        </Grid>
        <Grid item xs={12} lg={7} xl={5}>
          <Box mb={4}>
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
          <Stack spacing={2} direction="row" alignItems="center">
            <Button
              variant="contained"
              size="medium"
              color="success"
              disabled={loadingUpdate}
              onClick={handleSubmit(handleSave)}
            >
              Save
            </Button>
            {loadingUpdate ? <CircularProgress size={20} /> : null}
          </Stack>
        </Grid>
        {/* <Grid item xs={12} lg={5}>
          <ImageUpload
            viewType="square"
            image={image}
            onChange={onUploadImage}
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}
