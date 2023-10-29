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

import {
  FaqRichTextType,
  FaqType,
  FaqSectionFormDataType,
} from './FaqForm.type';
import FaqSectionFormService from './FaqForm.service';
import ReactQuill from 'react-quill';

const defaultFaqListItem: FaqType = {
  heading: '',
  rich_text: '',
};

const defaultValuesForm: FaqSectionFormDataType = {
  image: '',
  heading: '',
  list_faq: [defaultFaqListItem],
};

const serviceSectionFaq = new FaqSectionFormService();

export default function FaqForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);

  const [markdownTextArray, setMarkdownTextArray] = useState<FaqRichTextType[]>(
    []
  );

  const { handleSubmit, register, control, setValue } =
    useForm<FaqSectionFormDataType>({
      mode: 'onSubmit',
      defaultValues: defaultValuesForm,
    });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'list_faq',
    keyName: '_id',
  });

  async function loadData() {
    try {
      setLoading(true);
      const response = await serviceSectionFaq.getInfo();
      const { heading, list_faq } = response.data;
      setValue('heading', heading);
      if (list_faq.length) {
        setValue('list_faq', list_faq);
        fillRichTextEditorArray(list_faq);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function fillRichTextEditorArray(array: FaqRichTextType[]) {
    if (!array.length) return null;
    const items: FaqRichTextType[] = [];
    array.forEach((item) => {
      items.push({
        _id: item._id,
        rich_text: item.rich_text,
      });
    });
    setMarkdownTextArray(items);
  }

  function onChangeRichTextEditor(index: number, value: string) {
    const updatedItems = [...markdownTextArray];
    updatedItems[index] = {
      ...updatedItems[index],
      rich_text: value,
    };
    setMarkdownTextArray(updatedItems);
    setValue(`list_faq.${index}.rich_text`, value);
  }

  function onHandleAddAchivmentItem() {
    append(defaultFaqListItem);
  }

  function onHandleRemoveAchivmentItem(numberAchivment: number) {
    remove(numberAchivment);
  }

  async function handleSave(data: FaqSectionFormDataType) {
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
            <Box key={item._id} mb={4}>
              <Box mb={2}>
                <TextField
                  {...register(`list_faq.${index}.heading`)}
                  id={`list_faq.${index}.heading`}
                  label="Heading achivment"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={4}>
                <ReactQuill
                  theme="snow"
                  value={
                    markdownTextArray[index]
                      ? markdownTextArray[index].rich_text
                      : ''
                  }
                  onChange={(value) => onChangeRichTextEditor(index, value)}
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
