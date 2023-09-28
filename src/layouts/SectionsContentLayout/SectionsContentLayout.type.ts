export type SectionsContentLayoutProps = {
  heading: string;
  navigation: SectionContentLink[];
  children?: React.ReactNode;
};

export type SectionContentLink = {
  id: string;
  name: string;
  path: string;
};
