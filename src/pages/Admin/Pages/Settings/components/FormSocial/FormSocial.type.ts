export type FormSocialProps = {
  data: IFormSocialData;
};

export interface IFormSocialData {
  social_list: IFormSocialItem[];
}

export interface IFormSocialItem {
  id?: string;
  social_icon: string;
  social_url: string;
}
