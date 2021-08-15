import { TTask } from "./types";

export const defineTask = (): TTask =>
  // returns the task object sent from the button
  ({
    id: 0,
    text: "string",
    day: "string",
    reminder: true,
  });
export const addTask = (): boolean =>
  // boolean that toggles defineTask
  true;
