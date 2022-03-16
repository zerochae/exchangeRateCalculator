export const SETINPUT = "input/SETINPUT" as const;

export const setInput = (diff: string) => ({
  type: SETINPUT,
  payload: diff,
});
