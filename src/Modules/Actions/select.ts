export const SELECTSENDER = "select/SELECTSENDER";

export const SELECTRECEIVER = "select/SELECTRECEIVER";

export const selectSender = (diff: string) => ({
  type: SELECTSENDER,
  payload: diff,
});

export const selectReceiver = (diff: string) => ({
  type: SELECTRECEIVER,
  payload: diff,
});
