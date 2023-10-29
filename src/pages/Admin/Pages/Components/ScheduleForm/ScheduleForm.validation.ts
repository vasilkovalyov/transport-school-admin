import * as yup from 'yup';

export default yup.object().shape({
  heading: yup.string().required('Heading is required'),
  post_number: yup.number().required('Post number is required'),
  publish: yup.boolean().oneOf([true, false]),
});
