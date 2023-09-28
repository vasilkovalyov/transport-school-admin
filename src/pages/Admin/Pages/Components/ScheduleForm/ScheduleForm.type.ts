export type ScheduleFormProps = {
  data?: IScheduleFormData;
  onSubmit?: (data: IScheduleFormData) => void;
};

export interface IScheduleFormData {
  heading: string;
}
