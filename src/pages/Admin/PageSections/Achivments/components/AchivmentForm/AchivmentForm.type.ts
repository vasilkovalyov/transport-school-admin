export type AchivmentSectionFormDataType = {
  heading: string;
  subheading?: string;
  list_achivments?: AchivmentSectionListItemDataType[];
};

export type AchivmentSectionListItemDataType = {
  id?: string;
  heading: string;
  text: string;
};
