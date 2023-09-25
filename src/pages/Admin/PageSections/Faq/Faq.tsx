import { PrivateContentLayout } from '@/src/layouts';
import { FaqForm } from './components';

export default function PageSectionFaq() {
  return (
    <PrivateContentLayout heading="Section Faq">
      <FaqForm />
    </PrivateContentLayout>
  );
}
