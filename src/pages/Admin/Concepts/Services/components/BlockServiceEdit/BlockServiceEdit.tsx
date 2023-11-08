import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

import { AlertMessageModal, useAlertMessageModal } from '@/src/components';

import ServiceForm from '../ServiceForm/ServiceForm';
import { ServiceEditableFormData } from '../ServiceForm/ServiceForm.type';
import { Concepts } from '@/src/constants/routes/concepts';
import ServicesService from '../../Services.service';

const service = new ServicesService();

const initialData: ServiceEditableFormData = {
  heading: '',
  price: 0,
  top_list_info: [],
  bottom_list_info: [],
};

type LoadingType = 'loading' | 'loadingRemove' | 'loadingUpdate';

export default function BlockServiceEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ServiceEditableFormData>(initialData);
  const [loading, setLoading] = useState<LoadingType | null>('loading');
  const { openModal, onCloseModal, onOpenModal } = useAlertMessageModal();

  async function loadData() {
    try {
      setLoading('loading');
      const response = await service.getPost(id || '');
      if (response.data === null) {
        navigate(Concepts.SERVICES);
      }
      setData(response.data);
    } catch (e) {
      console.log(e);
      navigate(Concepts.SERVICES);
    } finally {
      setLoading(null);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: ServiceEditableFormData) {
    try {
      setLoading('loadingUpdate');
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(Concepts.SERVICES);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(null);
    }
  }

  async function onDeleteService() {
    try {
      setLoading('loadingRemove');
      await service.delete(id || '');
      navigate(Concepts.SERVICES);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(null);
    }
  }

  return (
    <Box component="section">
      {loading === 'loading' ? (
        <Box pb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <ServiceForm
        data={data}
        loading={loading === 'loadingUpdate'}
        onSubmit={onUpdate}
      />
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={() => {
            if (id) {
              onOpenModal(id);
            }
          }}
        >
          Delete
        </Button>
      </Box>
      <AlertMessageModal
        open={openModal}
        loading={loading === 'loadingRemove'}
        title="Do you want to remove service?"
        handleAgree={onDeleteService}
        handleClose={onCloseModal}
      />
    </Box>
  );
}
