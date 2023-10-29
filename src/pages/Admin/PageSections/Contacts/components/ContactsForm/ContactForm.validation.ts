import * as yup from 'yup';

export default yup.object().shape({
  heading: yup.string().required('Heading is required'),
  address: yup.string().required('Address is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email().required('Email is required'),
});
