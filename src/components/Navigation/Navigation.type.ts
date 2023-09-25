export type NavigationLinkItemProps = {
  id: string;
  path?: string;
  name: string;
  icon?: string;
  children?: NavigationLinkItemProps[];
};
