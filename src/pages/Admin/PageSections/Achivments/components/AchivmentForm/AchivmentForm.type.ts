export interface IAchivmentSectionFormData {
  heading: string;
  subheading: string;
  list_achivments: IAchivmentSectionListItemData[];
}

export interface IAchivmentSectionListItemData {
  id?: string;
  heading: string;
  text: string;
}
