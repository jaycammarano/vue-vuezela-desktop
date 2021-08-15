export type TTask = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
  complete: boolean;
};

export interface ITask {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}
