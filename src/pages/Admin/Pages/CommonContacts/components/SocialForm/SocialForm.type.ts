export type SocialFormProps = {
  data: SocialFormDataType;
};

export type SocialFormDataType = {
  social_list: SocialFormItemType[];
};

export type SocialFormItemType = {
  id?: string;
  social_icon: string;
  social_url: string;
};
