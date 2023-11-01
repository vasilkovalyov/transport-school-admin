import * as yup from 'yup';

export default yup.object().shape({
  heading: yup.string().required('Heading is required'),
  type_group: yup.string().required('Type group is required'),
  type_lesson: yup.string().required('Type lesson is required'),
  date_start_event: yup.string().required('Date start event is required'),
  time_start: yup.string().required('Time start is required'),
  time_end: yup.string().required('Time end is required'),
  max_people: yup.number().required('Max people is required'),
});
