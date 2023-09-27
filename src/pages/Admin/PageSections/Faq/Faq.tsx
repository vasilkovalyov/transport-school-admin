import { PrivateContentLayout } from '@/src/layouts';
import { FaqForm } from './components';

export default function PageSectionFaq() {
  return (
    <PrivateContentLayout heading="Section Faq">
      <FaqForm
        data={{
          heading: 'Ответы на частые вопросы',
          list_faq: [
            {
              id: '1',
              heading: 'Где и как проходит обучение?',
              text: 'Обучение проходит в Бруклине, штат Нью-Йорк. длительностью 3-5 дней. Формат обучения очный. Начало обучения в зависимости от выбранного курса.',
            },
            {
              id: '2',
              heading: 'Кто будет обучать?',
              text: 'Наш спикер - в прошлом опытный водитель, а на данный момент -  бизнесмен, который в короткий срок обучит вас всем тонкостям организации и ведения бизнеса в сфере кархолинг.',
            },
            {
              id: '3',
              heading: 'Что нужно брать с собой?',
              text: 'Driver License и хорошее настроение! А блокноты и ручки будут презентом от нас на первом занятии.',
            },
          ],
        }}
        onSubmit={(data) => console.log(data)}
      />
    </PrivateContentLayout>
  );
}
