import { PrivateContentLayout } from '@/src/layouts';
import { ContactsForm } from './components';

export default function PageSectionContacts() {
  return (
    <PrivateContentLayout heading="Section contacts">
      <ContactsForm
        data={{
          heading: 'Контакты',
          address: '3524 SILVERSIDE RD STE 35B WILMINGTON DE 19810',
          phone: '+1 (347) 310-7483',
          email: 'test@test.com',
          map_url:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308103857!2d-77.09697646335972!3d38.89385915491105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z0JLQsNGI0LjQvdCz0YLQvtC9LCDQntC60YDRg9CzINCa0L7Qu9GD0LzQsdGW0Y8sINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1695653198996!5m2!1suk!2sua',
        }}
      />
    </PrivateContentLayout>
  );
}
