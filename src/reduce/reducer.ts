import { initialStateType, reducerAction } from "./type";
import { INIT, SET_POSITION } from "./action";

const initialState: initialStateType = {
  about: 0,
  resume: 0,
  skill: 0,
};

const main = (
  state: initialStateType = initialState,
  action: reducerAction
): initialStateType => {
  switch (action.type) {
    case INIT:
      return initialState;

    case SET_POSITION:
      const { about, resume, skill } = action.payload;

      return {
        ...state,
        about: about - 100,
        resume: resume - 100,
        skill: skill - 100,
      };

    default:
      return state;
  }
};

export default main;
