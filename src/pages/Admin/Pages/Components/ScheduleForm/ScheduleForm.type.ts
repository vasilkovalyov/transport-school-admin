export type ScheduleFormProps = {
  data?: IScheduleFormData;
  onSubmit?: (data: IScheduleFormData) => void;
};

export interface IScheduleFormData {
  heading: string;
  schedule_number: number | null;
  publish: boolean;
}
