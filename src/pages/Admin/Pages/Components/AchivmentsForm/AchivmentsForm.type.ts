export type AchivmentsFormProps = {
  data?: IAchivmentsFormData;
  onSubmit?: (data: IAchivmentsFormData) => void;
};

export interface IAchivmentsFormData {
  isShow: boolean;
}
