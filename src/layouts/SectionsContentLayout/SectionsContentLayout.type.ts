export type SectionsContentLayoutProps = {
  heading: string;
  navigation: SectionContentLink[];
};

export type SectionContentLink = {
  id: string;
  name: string;
  path: string;
};
