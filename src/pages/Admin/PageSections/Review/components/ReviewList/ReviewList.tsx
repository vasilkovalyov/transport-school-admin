import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IReview, ReviewRow } from '../ReviewRow';
import ServiceReview from '../../Review.service';

const headCells: string[] = ['Image', 'Name', 'Text', 'Rating'];

const service = new ServiceReview();

export default function ReviewList() {
  const [reviews, setReviews] = useState<IReview[]>([]);

  async function loadData() {
    try {
      const response = await service.getAll();
      setReviews(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function onDeleteReview(id: string) {
    try {
      await service.delete(id);
      const updatedReviews = reviews.filter((item) => item._id !== id);
      setReviews(updatedReviews);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      {reviews && !reviews.length ? (
        <Typography variant="h4">There are no reviews</Typography>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headCells.map((cell) => (
                  <TableCell key={cell}>{cell}</TableCell>
                ))}
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews && reviews.length
                ? reviews.map((rowReview) => (
                    <ReviewRow
                      key={rowReview._id}
                      data={rowReview}
                      onDelete={onDeleteReview}
                    />
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
