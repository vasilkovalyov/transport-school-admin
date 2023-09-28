import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ReviewRow, ReviewRowProps } from '../ReviewRow';

const reviews: ReviewRowProps[] = [
  {
    _id: '1',
    image:
      'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=',
    name: 'Андрей',
    text: 'Автошкола припала мне по душе как студентке, так и предпринимателю. Здесь ценности звучат резонансно, атмосфера современная и дружелюбная. Пространство пронизано светом и приятно находиться. Мне нравится, что Анна с открытым сердцем воплощает этот проект. Это ощущается. Успехов!',
    rating: 4,
  },
  {
    _id: '2',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Михаил',
    text: 'Автошкола припала мне по душе как студентке, так и предпринимателю. Здесь ценности звучат резонансно, атмосфера современная и дружелюбная. Пространство пронизано светом и приятно находиться. ',
    rating: 2,
  },
  {
    _id: '3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HBtARooizrlzOY5LbUi4z1WqfMqKH3VSm-WqMFpDch-1R5cPnDz72zhy3MRz02rWjU8&usqp=CAU',
    name: 'Олег',
    text: 'Автошкола припала мне по душе как студентке, так и предпринимателю. ',
    rating: 5,
  },
];

const headCells: string[] = ['Image', 'Name', 'Text', 'Rating'];

export default function ReviewList() {
  return (
    <Box>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((rowReview) => (
              <ReviewRow key={rowReview._id} {...rowReview} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
