export const SELECTSENDER = "select/SELECTSENDER" as const;

export const SELECTRECEIVER = "select/SELECTRECEIVER" as const;

export const selectSender = (diff: string) => ({
  type: SELECTSENDER,
  payload: diff,
});

export const selectReceiver = (diff: string) => ({
  type: SELECTRECEIVER,
  payload: diff,
});
