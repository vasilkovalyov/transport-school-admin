import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import {
  CourseForPeopleFormProps,
  ICourseForPeopleFormData,
} from './CourseForPeopleForm.type';
import schemaValidation from './CourseForPeopleForm.validation';

const defaultValuesForm: ICourseForPeopleFormData = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function CourseForPeopleForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: CourseForPeopleFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const { handleSubmit, register, setValue } =
    useForm<ICourseForPeopleFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
      resolver: yupResolver(schemaValidation),
    });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);

    if (data.rich_text) {
      setMarkdownText(data.rich_text);
    }
  }, [data]);

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function handleSave(params: ICourseForPeopleFormData) {
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
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              size="medium"
              color="success"
              onClick={handleSubmit(handleSave)}
            >
              {data ? 'Update' : 'Create'}
            </Button>
            {data ? (
              <Button
                variant="contained"
                size="medium"
                color={data?.publish ? 'info' : 'warning'}
                onClick={() => onPublish && onPublish(!data?.publish)}
              >
                {data?.publish ? 'Unpublish' : 'Publish'}
              </Button>
            ) : null}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
