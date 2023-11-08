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
import CircularProgress from '@mui/material/CircularProgress';

import { ServiceRow, ServiceRowProps } from '../ServiceRow';
import ServicesService from '../../Services.service';

const service = new ServicesService();

const headCells: string[] = ['Image', 'Heading', 'Price'];

export default function ServiceList() {
  const [posts, setPosts] = useState<ServiceRowProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getPosts();
      if (!response.data.length) return;

      const item = response.data.map((item) => {
        return {
          _id: item._id,
          heading: item.heading,
          price: item.price,
          image: item.image,
        };
      });
      setPosts(item as ServiceRowProps[]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {posts && posts.length ? (
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
              {posts.map((post) => (
                <ServiceRow key={post._id} {...post} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h4">No services</Typography>
      )}
    </Box>
  );
}
