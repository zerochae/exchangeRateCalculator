import * as A from "Actions/select";
import * as C from "Constants/index";

type SelectState = {
  sender: string;
  receiver: string;
};

type SelectAction =
  | ReturnType<typeof A.selectSender>
  | ReturnType<typeof A.selectReceiver>;

const initialState: SelectState = {
  sender: C.EN_COUNTRIES.US,
  receiver: C.EN_COUNTRIES.KR,
};

const select = (state: SelectState = initialState, action: SelectAction) => {
  switch (action.type) {
    case A.SELECTSENDER:
      return { ...state, sender: action.payload };
    case A.SELECTRECEIVER:
      return { ...state, receiver: action.payload };
    default:
      return state;
  }
};

export default select;
