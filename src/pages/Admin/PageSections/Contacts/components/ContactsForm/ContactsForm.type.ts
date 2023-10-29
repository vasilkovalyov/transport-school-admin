export type ContactsSectionFormDataType = {
  heading: string;
  address: string;
  phone: string;
  email: string;
  map_url?: string;
};

export type FormValuesKey = keyof ContactsSectionFormDataType;
