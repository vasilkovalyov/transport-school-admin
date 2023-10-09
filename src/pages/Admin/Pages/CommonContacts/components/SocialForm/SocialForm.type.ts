export type SocialFormProps = {
  data: ISocialFormData;
};

export interface ISocialFormData {
  social_list: ISocialFormItem[];
}

export interface ISocialFormItem {
  id?: string;
  social_icon: string;
  social_url: string;
}
