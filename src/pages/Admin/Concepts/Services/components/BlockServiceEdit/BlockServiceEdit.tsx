import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import ServiceForm from '../ServiceForm/ServiceForm';
import { ServiceEditableFormData } from '../ServiceForm/ServiceForm.type';
import { LinksConcepts } from '@/src/constants/routes';
import ServicesService from '../../Services.service';

const service = new ServicesService();

const initialData: ServiceEditableFormData = {
  heading: '',
  price: null,
  top_list_info: [],
  bottom_list_info: [],
};

export default function BlockServiceEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ServiceEditableFormData>(initialData);

  async function loadData() {
    try {
      const response = await service.getPost(id || '');
      if (response.data === null) {
        navigate(LinksConcepts.SERVICES);
      }
      setData(response.data);
    } catch (e) {
      console.log(e);
      navigate(LinksConcepts.SERVICES);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: ServiceEditableFormData) {
    try {
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(LinksConcepts.SERVICES);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete() {
    try {
      await service.delete(id || '');
      navigate(LinksConcepts.SERVICES);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box component="section">
      <ServiceForm data={data} onSubmit={onUpdate} />
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
