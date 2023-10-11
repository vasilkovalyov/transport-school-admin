import { PrivateContentLayout } from '@/src/layouts';
import { ContactsForm } from './components';

export default function PageSectionContacts() {
  return (
    <PrivateContentLayout heading="Section contacts">
      <ContactsForm />
    </PrivateContentLayout>
  );
}
