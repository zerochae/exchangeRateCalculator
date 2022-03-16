import * as A from "Actions/index";
import * as C from "Constants/index";

type SelectState = {
  sender: string;
  receiver: string;
};

type SelectAction =
  | ReturnType<typeof A.setSender>
  | ReturnType<typeof A.setReceiver>;

const initialState: SelectState = {
  sender: C.EN_COUNTRIES.US,
  receiver: C.EN_COUNTRIES.KR,
};

const select = (state: SelectState = initialState, action: SelectAction) => {
  switch (action.type) {
    case A.SETSENDER:
      return { ...state, sender: action.payload };
    case A.SETRECEIVER:
      return { ...state, receiver: action.payload };
    default:
      return state;
  }
};

export default select;
