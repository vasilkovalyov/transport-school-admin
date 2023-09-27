export type DynamicFieldTogglersProps = {
  fieldLength: number;
  fieldIndex: number;
  fieldAppend: () => void;
  fieldRemove: (fieldIndex: number) => void;
};
