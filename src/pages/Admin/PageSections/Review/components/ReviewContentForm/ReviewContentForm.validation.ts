import * as yup from 'yup';

export default yup.object().shape({
  heading: yup.string().required('Heading is required'),
});
