export const INIT = "action/INIT" as const;
export const SET_POSITION = "action/SET_POSITION" as const;

export const init = () => ({
  type: INIT,
  payload: {},
});

export const setPosition = (about: any, resume: any, skill: any) => ({
  type: SET_POSITION,
  payload: {
    about,
    resume,
    skill,
  },
});
