import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { BlogCardProps, BlogCard } from '../BlogCard';
import Pagination from '@mui/material/Pagination';

const blogs: BlogCardProps[] = [
  {
    _id: '1',
    image:
      'https://images.unsplash.com/photo-1682686581498-5e85c7228119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heading: 'Новоприбывшие в США , которые ищут возможности',
    text: 'Начинающим нужно время, чтобы приобрести уверенность за рулем. Поэтому на дорогах могут случаться разные ситуации. Водителю-новичку крайне важно разобраться в видах страхования автомобиля, таких как...',
  },
  {
    _id: '2',
    image:
      'https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    heading:
      'Изменения в процессе обучения в автошколе и получении водительского удостоверения',
    text: 'Изменения в процессе обучения в автошколе и получении водительского удостоверения. Рассказываем, что нового нас ожидает в июле. Ранее студенты приходили в автошколу, проходили...',
  },
  {
    _id: '3',
    image:
      'https://images.unsplash.com/photo-1682695796795-cc287af78a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heading: 'О чем молчат в автошколах: руководство для водителей-новичков',
    text: 'Ми неодноразово чули від студентів, що вони бояться сідати за кермо. Часто позбутися страху допомагають наші досвідчені інструктори, але зараз хочемо підійти до питання з іншого боку...',
  },
  {
    _id: '4',
    heading: 'Новоприбывшие в США , которые ищут возможности',
    text: 'Начинающим нужно время, чтобы приобрести уверенность за рулем. Поэтому на дорогах могут случаться разные ситуации. Водителю-новичку крайне важно разобраться в видах страхования автомобиля, таких как...',
  },
];

export default function BlogList() {
  return (
    <Box>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid key={blog._id} item sm={12} lg={4} xl={3} display="flex">
            <BlogCard {...blog} />
          </Grid>
        ))}
      </Grid>
      <Box py={4} display="flex" justifyContent="center">
        <Pagination count={10} shape="rounded" />
      </Box>
    </Box>
  );
}
