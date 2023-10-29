export type CtaSectionFormDataType = {
  heading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
};

export type CtaSectionCheckboxTypes = Pick<
  CtaSectionFormDataType,
  'use_link_to_contact_page' | 'use_phone_cta'
>;
