export interface ICtaSectionFormData {
  heading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}

export type CtaSectionCheckboxTypes = Pick<
  ICtaSectionFormData,
  'use_link_to_contact_page' | 'use_phone_cta'
>;
