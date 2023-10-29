import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is required'),
  text: yup.string().required('Text is required'),
});
