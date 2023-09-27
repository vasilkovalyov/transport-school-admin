import { Box } from '@mui/material';

import ServiceForm from '../ServiceForm/ServiceForm';

export default function BlockServiceEdit() {
  return (
    <Box component="section">
      <ServiceForm
        data={{
          heading: 'PLUS',
          price: 2000,
          top_list_info: [
            {
              text: 'Теоретические занятия',
            },

            {
              text: 'Вопрос-ответ с наставником',
            },
          ],
          bottom_list_info: [
            {
              text: 'Практические занятия',
            },
            {
              text: 'Помощь в регистрации своей компании',
            },
            {
              text: '5 дней обучения',
            },
            {
              text: '7,5 академ-часов ',
            },
          ],
        }}
        onSubmit={(data) => console.log(data)}
      />
    </Box>
  );
}
