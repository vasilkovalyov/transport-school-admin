import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import ServiceForm from '../ServiceForm/ServiceForm';
import { ServiceEditableFormData } from '../ServiceForm/ServiceForm.type';
import { LinksConcepts } from '@/src/constants/routes';
import ServicesService from '../../Services.service';

const service = new ServicesService();

export default function BlockServiceCreate() {
  const navigate = useNavigate();

  async function onCreate(params: ServiceEditableFormData) {
    try {
      await service.create(params);
      navigate(LinksConcepts.SERVICES);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box component="section">
      <ServiceForm onSubmit={onCreate} />
    </Box>
  );
}
