import * as A from "Actions/select";

type SelectState = {
  sender: string;
  receiver: string;
};

type SelectAction =
  | ReturnType<typeof A.selectSender>
  | ReturnType<typeof A.selectReceiver>;

const initialState: SelectState = {
  sender: "",
  receiver: "",
};

const select = (state: SelectState = initialState, action: SelectAction) => {
  switch (action.type) {
    case A.SELECTSENDER:
      return { sender: action.payload };
    case A.SELECTRECEIVER:
      return { receiver: action.payload };
    default:
      return state;
  }
};

export default select;
