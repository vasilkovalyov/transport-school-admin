import { PrivateContentLayout } from '@/src/layouts';
import { CtaForm } from './components';

export default function PageSectioCta() {
  return (
    <PrivateContentLayout heading="Section Cta">
      <CtaForm
        data={{
          heading: 'Остались вопросы? Мы всегда на связи!',
          use_link_to_contact_page: true,
          use_phone_cta: true,
        }}
        onSubmit={(data) => console.log(data)}
      />
    </PrivateContentLayout>
  );
}
