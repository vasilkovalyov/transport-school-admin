import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import { DynamicFieldTogglers } from '@/src/components';
import {
  StructEducationFormProps,
  StructEducationFormDataType,
  StructEducationDataType,
  StructEducationRichTextType,
} from './StructEducationForm.type';
import schemaValidation from './StructEducationForm.validation';
import { BlockTogglers } from '../BlockTogglers';
import ReactQuill from 'react-quill';

const defaultStructEducationItem: StructEducationDataType = {
  heading: '',
  rich_text: '',
};

const defaultValuesForm: StructEducationFormDataType = {
  heading: '',
  struct_education_list: [defaultStructEducationItem],
  publish: false,
};

export default function StructEducationForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: StructEducationFormProps) {
  const [markdownTextArray, setMarkdownTextArray] = useState<
    StructEducationRichTextType[]
  >([]);

  const { control, handleSubmit, register, setValue } =
    useForm<StructEducationFormDataType>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
      resolver: yupResolver(schemaValidation),
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'struct_education_list',
    keyName: '_id',
  });

  function fillRichTextEditorArray(array: StructEducationRichTextType[]) {
    if (!array.length) return null;
    const items: StructEducationRichTextType[] = [];
    array.forEach((item) => {
      items.push({
        _id: item._id,
        rich_text: item.rich_text,
      });
    });
    setMarkdownTextArray(items);
  }

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    if (data.struct_education_list?.length) {
      setValue('struct_education_list', data.struct_education_list);
      fillRichTextEditorArray(data.struct_education_list);
    }
  }, [data]);

  function handleSave(params: StructEducationFormDataType) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
          publish: data?.publish,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
      });
  }

  function onChangeRichTextEditor(index: number, value: string) {
    const updatedItems = [...markdownTextArray];
    updatedItems[index] = {
      ...updatedItems[index],
      rich_text: value,
    };
    setMarkdownTextArray(updatedItems);
    setValue(`struct_education_list.${index}.rich_text`, value);
  }

  function onHandleAddItem() {
    append(defaultStructEducationItem);
  }

  function onHandleRemoveItem(number: number) {
    const updatedItems = markdownTextArray.filter((item, index) => {
      if (index !== number) return item;
    });
    setMarkdownTextArray(updatedItems);
    remove(number);
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
        <Typography variant="h4" margin={0}>
          Struct education list
        </Typography>
      </Box>
      <Box mb={2}>
        {fields.map((item, index) => (
          <Box key={item._id} mb={4}>
            <Box mb={4}>
              <TextField
                {...register(`struct_education_list.${index}.heading`)}
                id={`heading-${index}`}
                label="Heading"
                variant="outlined"
                fullWidth
                defaultValue={item.heading}
                InputLabelProps={{
                  shrink: true,
                }}
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
            <DynamicFieldTogglers
              fieldLength={fields.length}
              fieldIndex={index}
              fieldAppend={onHandleAddItem}
              fieldRemove={onHandleRemoveItem}
            />
          </Box>
        ))}
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
