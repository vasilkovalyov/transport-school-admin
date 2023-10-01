import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { ImageUpload } from '@/src/components';

import { WhoTeachFormProps, IWhoTeachFormData } from './WhoTeachForm.type';

const defaultValuesForm: IWhoTeachFormData = {
  image: '',
  heading: '',
  rich_text: '',
};

export default function WhoTeachForm({ data, onSubmit }: WhoTeachFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const { handleSubmit, register, setValue } = useForm<IWhoTeachFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  useEffect(() => {
    if (!data) return;
    setMarkdownText(data.rich_text);
  }, [data]);

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function handleSave(data: IWhoTeachFormData) {
    onSubmit && onSubmit(data);
  }

  return (
    <Box component="form" marginBottom={4}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} lg={7} xl={7}>
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
            <MDEditor
              onChange={(value) => onChangeRichTextEditor(value as string)}
              value={markdownText || ''}
            />
          </Box>
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
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box mb={4}>
            <ImageUpload
              viewType="square"
              image={data?.image}
              onChange={onUploadImage}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
