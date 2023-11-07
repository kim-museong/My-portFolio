import { init, setPosition } from "./action";

export type initialStateType = {
  about: any;
  resume: any;
  skill: any;
};

export type reducerAction =
  | ReturnType<typeof setPosition>
  | ReturnType<typeof init>;
