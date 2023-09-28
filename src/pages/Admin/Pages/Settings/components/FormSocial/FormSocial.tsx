import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DynamicFieldTogglers } from '@/src/components';

import { IFormSocialData, IFormSocialItem } from './FormSocial.type';

const defaultSocialItem: IFormSocialItem = {
  social_icon: '',
  social_url: '',
};

const defaultValuesForm: IFormSocialData = {
  social_list: [defaultSocialItem],
};

export default function FormSocial() {
  const { control, handleSubmit, register } = useForm<IFormSocialData>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'social_list',
    keyName: 'id',
  });

  function handleSave(data: IFormSocialData) {
    console.log(data);
  }

  function onHandleAddItem() {
    append(defaultSocialItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  return (
    <Box>
      <Typography variant="h4" marginBottom={2}>
        Social
      </Typography>
      <Box component="form" maxWidth={660} marginBottom={4}>
        <Box mb={2}>
          {fields.map((item, index) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap={2}
              mb={2}
            >
              <FormControl fullWidth>
                <InputLabel id={`social_icon-${index}`}>
                  Social network
                </InputLabel>
                <Select
                  {...register(`social_list.${index}.social_icon`)}
                  labelId={`social_icon-${index}`}
                  id={`social_icon-${index}`}
                  label="Social network"
                  defaultValue={''}
                >
                  <MenuItem value="instagram">Instagram</MenuItem>
                  <MenuItem value="whatsapp">Whatsapp</MenuItem>
                  <MenuItem value="facebook">Facebook</MenuItem>
                </Select>
              </FormControl>
              <TextField
                {...register(`social_list.${index}.social_url`)}
                id={`social_url-${index}`}
                label="Social url"
                variant="outlined"
                fullWidth
              />
              <DynamicFieldTogglers
                fieldLength={fields.length}
                fieldIndex={index}
                fieldAppend={onHandleAddItem}
                fieldRemove={onHandleRemoveItem}
              />
            </Box>
          ))}
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
      </Box>
    </Box>
  );
}
