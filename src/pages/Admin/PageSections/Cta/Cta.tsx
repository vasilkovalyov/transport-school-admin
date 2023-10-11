import { PrivateContentLayout } from '@/src/layouts';
import { CtaForm } from './components';

export default function PageSectioCta() {
  return (
    <PrivateContentLayout heading="Section Cta">
      <CtaForm />
    </PrivateContentLayout>
  );
}
