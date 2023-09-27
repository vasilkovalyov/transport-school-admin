import { PrivateContentLayout } from '@/src/layouts';
import { AchivmentForm } from './components';

export default function PageSectionAchivments() {
  return (
    <PrivateContentLayout heading="Section Achivments">
      <AchivmentForm
        data={{
          heading: 'Наши достижения в цифрах',
          subheading:
            'Реальные результаты говорят больше, нежели любое описание',
          list_achivments: [
            {
              id: '1',
              heading: '1143',
              text: 'выпускников нашей школы за 3 года',
            },
            {
              id: '2',
              heading: '1023k$',
              text: 'заработали суммарно наши выпускники',
            },
            {
              id: '3',
              heading: '307',
              text: 'успешно организованных и процветающих компаний',
            },
          ],
        }}
        onSubmit={(data) => console.log(data)}
      />
    </PrivateContentLayout>
  );
}
