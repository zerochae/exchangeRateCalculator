export const SETSENDER = "select/SETSENDER" as const;
export const SETRECEIVER = "select/SETRECEIVER" as const;

export const setSender = (diff: string) => ({
  type: SETSENDER,
  payload: diff,
});

export const setReceiver = (diff: string) => ({
  type: SETRECEIVER,
  payload: diff,
});
